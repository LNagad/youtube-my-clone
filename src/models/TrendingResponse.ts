
export interface TrendingApiResponse {
  data: Video[];
  msg: string;
}

export interface Video {
  videoId: string;
  title: string;
  channelTitle: string;
  channelId: string;
  channel: any;
  description: string;
  viewCount: string;
  publishedText: string;
  lengthText: string;
  thumbnail: Thumbnail[];
  richThumbnail?: Thumbnail[];
  channelThumbnail: Thumbnail[];
}

interface Thumbnail {
  url: string;
  width: number;
  height: number;
}