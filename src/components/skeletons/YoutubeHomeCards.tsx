
import ContentLoader from 'react-content-loader'

const YoutubeHomeCards = ({ ...props}) => {

   let thumb = 30
   let circle = 43
   let line = 70 

   let thumbY = 60
   let circleY = 204
   let FirstLineY = 189
   let SecondLineY = 211

   return (
      <ContentLoader 
         className='-mt-16 p-0 m-0'
         viewBox="0 0 900 507" 
         backgroundColor='#252525'
         foregroundColor='#0E0E0F'
         speed={5}
         {...props} >
         { Array.from({ length: 8 }).map( (card, index) => {
            
            if (index > 0) {
               thumb +=212
               circle +=212
               line +=212
            }
            if ( index === 4 ) {
               thumb = 30
               circle = 43
               line = 70 
            }
            if (index === 4) {
               thumbY += 190
               circleY += 191
               FirstLineY += 191
               SecondLineY += 193
            }
            return (
               <>
                  <rect x={ thumb } y={ thumbY } rx="10" ry="10" width="200" height="120" />
                  <circle cx={ circle } cy={ circleY } r="14" /> 
                  <rect x={ line } y={ FirstLineY } rx="0" ry="0" width="140" height="15" />
                  <rect x={ line } y={ SecondLineY } rx="0" ry="0" width="80" height="15" />
               </>
            )
         })}
      </ContentLoader>
   )
}

export default YoutubeHomeCards