import { Suspense } from "react";
import Image from "next/image";
import { AiFillCheckCircle } from 'react-icons/ai'
import { fetchRelatedVideos, getChannel, getVideo } from "@/services"
import { Player } from "@/components";
import RelatedVideoCard from "../components/RelatedVideoCard";

const fetchVideoDetails = async (id: string) => {
   try {
      const [data, relatedVideos] = await Promise.all([
         getVideo(id),
         fetchRelatedVideos(id)
      ]);
 
      const channelDetails = await getChannel(data.channelId);
      const avatarList = channelDetails.meta?.avatar || [];
 
      // Retornar la tercera posición del avatar si existe, sino la segunda posición.
      const channelImg =
       avatarList.length >= 3
          ? avatarList[2]
          : avatarList.length >= 2
             ? avatarList[1]
             : null;
 
      return { ...data, channelImg, channel: channelDetails.meta, relatedVideos: relatedVideos.data };
   } catch (error) {
      // Manejar errores aquí si es necesario
      console.error("Error fetching video details:", error);
      throw error;
   }
};
 

export default async function Page({ params }: { params: { id: string } }) {

   const videoData =  await fetchVideoDetails( params.id )
   
   return (
      <div>
   
         <div className="flex-col flex xl:flex-row px-3  lg:px-10 -my-4">
           
            <div className="w-[90%] xl:w-11/12">
               <div className="w-full mt-6">
                  <Player videoId={ videoData.id } />
               </div>
               <div className="mt-4 flex flex-col gap-y-2">
                  <p className="text-white font-medium text-lg">{ videoData.title }</p>
                  <div className="flex gap-x-2 items-center">
                     <div className="w-10 h-10">
                        <Image 
                           className="object-cover w-full h-full rounded-full"
                           src={ videoData!.channelImg?.url || ''}
                           alt={ videoData.channelTitle }
                           width={500}
                           height={500}
                        />
                     </div>
                     <div className="text-white">
                        <p className="text-sm font-medium flex items-center gap-x-1">{ videoData.channelTitle }
                           { videoData.channel.isVerified && ( <AiFillCheckCircle size={14}  color='rgb(163 163 163)' />) } 
                        </p>
                        <span className="flex items-center">
                           <p className='text-[13px] font-normal text-neutral-400 me-1'>
                              { videoData.channel.subscriberCountText }
                           </p>
                        </span>
                     </div>
                  </div>
               </div>
               {/* <Suspense fallback={ <YoutubeVideoDetails />}>
                  <div className="w-full">
                     <Player videoId={ params.id } />
                  </div>
               </Suspense> */}
               
            </div>

            <div className="grow py-6 md:px-4 flex flex-col md:gap-y-4">
               <Suspense fallback={ <span className="text-white">Loading...</span> }>
                  {
                     videoData.relatedVideos.map( video => (
                        <RelatedVideoCard key={ video.videoId } video={ video } />
                     ))
                  }
               </Suspense>
             
            </div>
         </div>
      </div>
   )
}