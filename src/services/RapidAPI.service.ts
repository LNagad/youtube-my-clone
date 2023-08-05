import { ChannelApiResponse, TrendingApiResponse } from "@/models";

interface endPoints {
  endPoint: 'trending' | 'video' | 'search' | 'comments' | 'channel';
  id?: string
}

if (!process.env.X_RapidAPI_Key || typeof process.env.X_RapidAPI_Key !== 'string') {
   throw new Error('X_RapidAPI_Key debe estar definido y ser una cadena de texto.');
}

const options = {
   method: 'GET',
   headers: {
      'X-RapidAPI-Key': process.env.X_RapidAPI_Key,
      'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com',
   },
};

const getEndpoint = ({ endPoint, id }: endPoints) => {
   return `https://youtube-v3-alternative.p.rapidapi.com/${endPoint}${id ?`?id=${id}`:'?geo=US&lang=en'}`;
};

export const fetchTrending = async () => {
   try { 
      const response = await fetch(getEndpoint({ endPoint: 'trending' }), options);
      const result: TrendingApiResponse = await response.json();
      return result;
   } catch (error: any) {
      console.error(error);
      throw new Error(error?.message);
   }
};

export const getChannelById = async ( id: string) => {
   try { 
      const response = await fetch(getEndpoint({ endPoint: 'channel', id }), options);
      const result: ChannelApiResponse = await response.json();
      return result;
      
   } catch (error: any) {
      console.error(error);
      throw new Error(error?.message);
   }
};
