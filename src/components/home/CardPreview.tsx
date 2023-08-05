import Image from 'next/image'
import Link from 'next/link'
import { formatViews, truncateText } from '@/helper'
import { VideoAPIResponse } from '@/models/TrendingAPIResponse'
// second div w-[300px] h-[180px]
const CardPreview = ({ video }: { video: VideoAPIResponse}) => {
   return (
      <article className='cursor-pointer md:w-[32%] lg:w-[24%]'>
         {/* <Link href={`/video/${video.videoId}`}> */}
         <div className='w-full rounded-2xl'>
            <Image 
               className='w-full h-full rounded-2xl '
               quality={ 100 }
               priority
               width={ 500 }
               height={ 500 }
               src={video?.thumbnail && (video.thumbnail[2]?.url || video.thumbnail.find(p => p !== null)?.url) || ''}
               alt={ video.title }   
            />
         </div>
         <div className='flex py-4 '>
            <div className='w-9 h-9 me-3  rounded-full'>
               <Image
                  style={{ width: 36, height: 36 }}
                  className='rounded-full object-fill'
                  quality={ 100 }
                  width={ 200 }
                  height={ 200 }
                  src={video?.channelThumbnail && video.channelThumbnail.find(p => p !== null)?.url || ''}
                  alt={ video.title }
               /> 
            </div>
            <div className='grow'>
               <p className='text-white text-sm font-medium break-all'>
                  { truncateText( video?.title, 30 ) }
               </p>
               <Link href={`/channel/${video.channelId}`}>
                  <p className='inline-block text-xs font-normal text-neutral-400 hover:text-white cursor-pointer'>
                     { video.channelTitle} 
                  </p>
               </Link>
               <p className='text-xs font-normal text-neutral-400'>
                  { formatViews(video.viewCount)+' views ' }
                  <span className='text-[10px]'> • </span>
                  { video.publishedTimeText }
               </p>
            </div>
         </div>
         
         {/* </Link> */}
      </article>
   )
}

export default CardPreview