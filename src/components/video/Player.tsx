"use client"

import ReactPlayer from 'react-player/lazy'
import { YoutubeVideoDetails } from '..'

const Player = ({ videoId }: { videoId: string } ) => {
   return (
      <ReactPlayer
         width={1000}
         height={550}
         fallback={ <YoutubeVideoDetails /> }     
         url={`https://www.youtube.com/watch?v=${videoId}`}
         controls
      />
   )
}

export default Player