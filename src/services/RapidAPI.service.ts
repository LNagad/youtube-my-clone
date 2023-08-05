import {
   ChannelApiResponse,
   RelatedVideosApiResponse,
   TrendingAPIResponse,
   VideoDetails,
} from "@/models";

interface endPoints {
  endPoint: "trending" | "video" | "search" | "comments" | "channel";
  id?: string;
  channelId?: string;
}

if (
   !process.env.X_RapidAPI_Key ||
  typeof process.env.X_RapidAPI_Key !== "string"
) {
   throw new Error(
      "X_RapidAPI_Key debe estar definido y ser una cadena de texto."
   );
}

const options = {
   method: "GET",
   headers: {
      "X-RapidAPI-Key": process.env.X_RapidAPI_Key,
      "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
   },
};

const getEndpoint = ({ endPoint, id, channelId }: endPoints) => {
   return `https://yt-api.p.rapidapi.com/${endPoint}${id ? `/info?id=${id}` : "?geo=US"}
   ${channelId ? `/home?id=${channelId}` : ""}`;
};

export const fetchTrending = async () => {
   try {
      const response = await fetch(
         getEndpoint({ endPoint: "trending" }),
         options
      );
      const result: TrendingAPIResponse = await response.json();
      return result;
   } catch (error: any) {
      console.error(error);
      throw new Error(error?.message);
   }
};

export const getVideo = async (id: string) => {
   try {
      const response = await fetch(
         getEndpoint({ endPoint: "video", id }),
         options
      );
      const result: VideoDetails = await response.json();
      return result;
   } catch (error: any) {
      console.error(error);
      throw new Error(error?.message);
   }
};

export const getChannel = async (id: string) => {
   try {
      const response = await fetch(
         `https://yt-api.p.rapidapi.com/channel/home?id=${id}`,
         options
      );
      const result: ChannelApiResponse = await response.json();
      return result;
   } catch (error: any) {
      console.error(error);
      throw new Error(error?.message);
   }
};

export const fetchRelatedVideos = async (id: string) => {
   try {
      const response = await fetch(
         `https://yt-api.p.rapidapi.com/related?id=${id}`,
         options
      );
      const result: RelatedVideosApiResponse = await response.json();
      return result;
   } catch (error: any) {
      console.error(error);
      throw new Error(error?.message);
   }
};
