
import ContentLoader from 'react-content-loader'

const YoutubeVideoDetails = ({ ...props}) => {
   return (
      <ContentLoader 
         className='-mt-5 pe-4 p-0 m-0'
         backgroundColor='#252525'
         foregroundColor='#0E0E0F'
         viewBox="0 0 360 440" {...props}>
         <rect x="16" y="17" rx="0" ry="0" width="360" height="200" />
         
         {/* video title */}
         <rect x="16" y="224" rx="2" ry="2" width="125" height="6" />

         {/* video picture */}
         <circle cx="24" cy="245" r="10" />

         {/* channel name */}
         <rect x="39" y="238" rx="2" ry="2" width="65" height="6" />
         
         {/* channel count */}
         <rect x="39" y="248" rx="2" ry="2" width="45" height="6" />

         
      </ContentLoader>
   )
}

export default YoutubeVideoDetails