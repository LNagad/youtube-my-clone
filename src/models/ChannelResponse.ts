export interface ChannelApiResponse {
  meta: Channel;
  continuation: string;
  data: Videos[];
  msg: string;
}

interface Videos {
  videoId: string;
  title: string;
  viewCount: string;
  publishedText: string;
  lengthText: string;
  thumbnail: Thumbnail[];
}

export interface Channel {
  title: string;
  description: string;
  thumbnail: Thumbnail[];
  image: Image;
  subscriberCount: string;
  keywords: string[];
  isFamilySafe: boolean;
  availableCountries: string[];
}

interface Image {
  banner: Thumbnail[];
  tvBanner: Thumbnail[];
  mobileBanner: Thumbnail[];
}

interface Thumbnail {
  url: string;
  width: number;
  height: number;
}