export interface TrendingAPIResponse {
  data: VideoAPIResponse[];
  msg: string;
}

export interface VideoAPIResponse {
  type: 'video';
  videoId?: string;
  title: string;
  channelTitle?: string;
  channelId?: string;
  channelThumbnail: ChannelThumbnail[];
  description?: string;
  viewCount: string;
  publishedTimeText?: string;
  publishDate?: string;
  publishedAt?: string;
  lengthText?: string;
  thumbnail: ChannelThumbnail[];
  richThumbnail?: ChannelThumbnail[];
}

interface ChannelThumbnail {
  url: string;
  width: number;
  height: number;
}