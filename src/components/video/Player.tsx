"use client"

import ReactPlayer from 'react-player/lazy'
import { YoutubeVideoDetails } from '..'
import { useLayoutEffect, useState } from 'react';

const Player = ({ videoId }: { videoId: string } ) => {
   
   const [isLargeScreen, setIsLargeScreen] = useState(window.matchMedia('(min-width: 700px)').matches);
   const [playerSize, setPlayerSize] = useState({ width: 1000, height: 550 });
 
   useLayoutEffect(() => {
      const handleResize = () => {
         setIsLargeScreen(window.matchMedia('(min-width: 700px)').matches);
      };
 
      // Disparar el efecto cuando se carga la página
      handleResize();
 
      // Agregar eventos de escucha para cambios en el tamaño de la ventana
      window.addEventListener('resize', handleResize);
 
      // Limpiar los eventos de escucha cuando el componente se desmonte
      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);
   // Actualizar el tamaño del reproductor según el breakpoint
   useLayoutEffect(() => {
      if (window.matchMedia('(max-width: 320px)').matches) {
         setPlayerSize({ width: 290, height: 150 });
      } else if (window.matchMedia('(max-width: 375px)').matches) {
         setPlayerSize({ width: 345, height: 180 });
      } else if (window.matchMedia('(max-width: 400px)').matches) {
         setPlayerSize({ width: 370, height: 200 });
      } else if (window.matchMedia('(max-width: 450px)').matches) {
         setPlayerSize({ width: 425, height: 230 });
      } else if (window.matchMedia('(max-width: 768px)').matches) {
         setPlayerSize({ width: 570, height: 250 });
      } else if (window.matchMedia('(max-width: 1024px)').matches) {
         setPlayerSize({ width: 800, height: 350 });
      } else if (window.matchMedia('(max-width: 1280px)').matches) {
         setPlayerSize({ width: 900, height: 450 });
      } else {
         setPlayerSize({ width: 1000, height: 550 });
      }
   }, [isLargeScreen]);
 
   return (
      <ReactPlayer
         width={playerSize.width}
         height={playerSize.height}
         fallback={ <YoutubeVideoDetails /> }     
         url={`https://www.youtube.com/watch?v=${videoId}`}
         controls
      />
   )
}

export default Player