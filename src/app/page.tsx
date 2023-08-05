import { Suspense } from "react"
import { fetchTrending } from "@/services"
import { YoutubeHomeCards, CardPreview } from "@/components"

const fetchHomePage = async() => {
   return await fetchTrending()
}

const CardData = async() => {
   const { data } = await fetchHomePage()
   
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
   
            <Suspense fallback={ <YoutubeHomeCards /> }>
               <CardData />
            </Suspense> 
         </div>
      </main>
   )
}
