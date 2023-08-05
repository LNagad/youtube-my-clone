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
   //w-full md:px-12 md:justify-between py-4 flex flex-wrap gap-y-8 ring-1 ring-white 
   //sm:px-4 sm:justify-evenly
   return (
      <div className="flex flex-col px-4 py-3 gap-y-8 sm:flex-row sm:flex-wrap sm:justify-evenly md:justify-between box-border">
         { data.map(info => {
            if ( info.type !== 'video') return;
            return ( 
               <CardPreview key={ info.videoId } video={ info } />
            )
         })}
      </div>
   )
}

export default async function Home() {

   return (
      
      <main>
         <div className="w-[calc(100vh - 1vh)]">
            {/* <CardData />
            <YoutubeHomeCards /> */}
        
            <Suspense fallback={ <YoutubeHomeCards /> }>
               <CardData />
            </Suspense> 
         </div>
      </main>
   )
}
