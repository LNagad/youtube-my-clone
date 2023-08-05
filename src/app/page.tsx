import { YoutubeHomeCards } from "@/components"
import CardPreview from "@/components/home/CardPreview"

import { fetchTrending, getChannelById } from "@/services"
import Link from "next/link"
import { Suspense } from "react"

const fetchHomePage = async() => {
   return await fetchTrending()
}

const CardData = async() => {
   const { data } = await fetchHomePage()
   
   const dataWithChannel = await Promise.all( data.map(async (video) => {
      video.channel = (await getChannelById(video.channelId)).meta;
      return video;
   }));
   
   // return (
   //    <div className="p-12">
   //       <CardPreview video={ dataWithChannel[0] } />
   //    </div>
   // )
   return (
      <div className="px-12 py-4 flex flex-wrap justify-between gap-y-8">
         { dataWithChannel.map(info => ( 
            <CardPreview key={ info.videoId } video={ info } />
         ))}
      </div>
   )
}

export default async function Home() {

   return (
      <main>
         <div className="">
            {/* <CardData />
            <YoutubeHomeCards /> */}
        
            <Suspense fallback={ <YoutubeHomeCards /> }>
               <CardData />
            </Suspense> 
         </div>
      </main>
   )
}
