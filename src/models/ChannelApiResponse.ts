export interface ChannelApiResponse {
  meta: Channel;
  continuation: string;
  data: HomeVideos[];
  msg: string;
}

interface HomeVideos {
  type: string;
  videoId?: string;
  title: string;
  viewCount?: string;
  publishedTimeText?: string;
  description?: string;
  subtitle?: string;
  data?: Datum[];
}

interface Datum {
  type: string;
  videoId?: string;
  title: string;
  viewCount?: string;
  publishedTimeText?: string;
  lengthText?: string;
  thumbnail: Banner[];
  playlistId?: string;
  subtitle?: string;
  videoCount?: string;
  channelId?: string;
  subscriberCount?: string;
}

interface Channel {
  channelId: string;
  title: string;
  description: string;
  channelHandle: string;
  banner: Banner[];
  tvBanner: Banner[];
  mobileBanner: Banner[];
  avatar: Banner[];
  subscriberCountText: string;
  subscriberCount: number;
  videosCountText: string;
  videosCount: number;
  isVerified: boolean;
  keywords: string[];
  isFamilySafe: boolean;
  availableCountries: string[];
  tabs: string[];
}

interface Banner {
  url: string;
  width: number;
  height: number;
}