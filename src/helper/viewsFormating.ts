export function formatViews(views : string ) {

   const viewsFormatted = parseInt(views)

   if (viewsFormatted >= 1000000) {
      return `${(viewsFormatted / 1000000).toFixed(1)} M`;
   } else if (viewsFormatted >= 10000) {
      return `${(viewsFormatted / 1000).toFixed(1)} K`;
   } else {
      return viewsFormatted.toString();
   }
}
  