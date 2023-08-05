import Image from 'next/image'
import Link from 'next/link'
import { formatViews, truncateText } from '@/helper'
import { Video } from '@/models'

const CardPreview = ({ video }: { video: Video}) => {
   return (
      <article className='w-[24%] cursor-pointer'>
         {/* <Link href={`/video/${video.videoId}`}> */}
         <div className='w-[300px] h-[180px] rounded-2xl'>
            <Image 
               className='w-full h-full rounded-2xl '
               quality={ 100 }
               priority
               width={ 200 }
               height={ 200 }
               src={ video.thumbnail[0].url }
               alt={ video.title }   
            />
         </div>
         <div className='flex py-4 '>
            <div className='w-9 h-9 me-3  rounded-full'>
               <Image
                  style={{ width: 36, height: 36 }}
                  className='rounded-full object-fill !important'
                  priority
                  quality={ 100 }
                  width={ 200 }
                  height={ 200 }
                  src={ video?.channel?.thumbnail[0].url }
                  alt={ video?.channel?.title }
               /> 
            </div>
            <div className='grow'>
               <p className='text-white text-sm font-medium break-all'>
                  { truncateText( video?.title, 30 ) }
               </p>
               <Link href={`/channel/${video.channelId}`}>
                  <p className='inline-block text-xs font-normal text-neutral-400 hover:text-white cursor-pointer'>
                     { video?.channel?.title } 
                  </p>
               </Link>
               <p className='text-xs font-normal text-neutral-400'>
                  { formatViews(video.viewCount)+' views ' }
                  <span className='text-[10px]'> • </span>
                  { video.publishedText }
               </p>
            </div>
         </div>
         
         {/* </Link> */}
      </article>
   )
}

export default CardPreview