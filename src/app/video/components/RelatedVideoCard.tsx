"use client"

import Image from 'next/image'
import { RelatedVideo } from '@/models/RelatedVideosApiResponse'
import { formatViews, truncateText } from '@/helper'
import { useRouter } from 'next/navigation'

const RelatedVideoCard = ({ video }: { video: RelatedVideo }) => {
   const router = useRouter()


   const handleClick = () => {
      router.push(`/video/${video.videoId}`)
   }
   
   return (
      <div className="flex gap-x-2 h-28 cursor-pointer" onClick={ handleClick }>
         <div className="w-8/12 box-border">
            <Image 
               className="w-full h-[90%] object-cover rounded-2xl"
               width={500}
               height={500}
               src={ video.thumbnail[0].url || '' }
               alt={ video.title } />
         </div>
         <div className="text-white w-7/12">
            <p className="text-sm font-medium break-all">
               { truncateText(video.title, 38) }
            </p>
            <p className='inline-block text-[13px] font-normal text-neutral-400 hover:text-white cursor-pointer'>
               {video.channelTitle}
            </p>
            <p className='md:text-[13px] text-xs font-normal text-neutral-400'>
               { formatViews(video.viewCount)+' views' } | { video.publishedTimeText }</p>
         </div>
      </div>
   )
}

export default RelatedVideoCard