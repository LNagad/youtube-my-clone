"use client"

import ReactPlayer from 'react-player/lazy';
import { YoutubeVideoDetails } from '..';
import { useEffect, useState } from 'react';

const Player = ({ videoId }: { videoId: string }) => {
   const [playerSize, setPlayerSize] = useState({ width: 1000, height: 550 });

   useEffect(() => {
      const getWindowWidth = () => document.documentElement.clientWidth;

      const getCurrentBreakpoint = () => {
         const windowWidth = getWindowWidth();
         if (windowWidth <= 320) {
            return { width: 190, height: 150 };
         } else if (windowWidth <= 375) {
            return { width: 345, height: 180 };
         } else if (windowWidth <= 400) {
            return { width: 370, height: 200 };
         } else if (windowWidth <= 450) {
            return { width: 390, height: 220 };
         } else if (windowWidth <= 768) {
            return { width: 570, height: 250 };
         } else if (windowWidth <= 1024) {
            return { width: 800, height: 350 };
         } else if (windowWidth <= 1280) {
            return { width: 900, height: 450 };
         } else {
            return { width: 1000, height: 550 };
         }
      };

      const handleResize = () => {
         const { width, height } = getCurrentBreakpoint();
         setPlayerSize({ width, height });
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

   return (
      <ReactPlayer
         width={playerSize.width}
         height={playerSize.height}
         fallback={<YoutubeVideoDetails />}
         url={`https://www.youtube.com/watch?v=${videoId}`}
         controls
      />
   );
};

export default Player;
