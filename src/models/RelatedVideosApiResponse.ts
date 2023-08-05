export interface RelatedVideosApiResponse {
  meta: CurrentVideo;
  continuation: string;
  data: RelatedVideo[];
  msg: string;
}

export interface RelatedVideo {
  type: string;
  videoId: string;
  title: string;
  lengthText?: string;
  viewCount: string;
  publishedTimeText?: string;
  publishDate?: string;
  publishedAt?: string;
  thumbnail: ChannelThumbnail[];
  channelTitle: string;
  channelId: string;
  channelThumbnail: ChannelThumbnail[];
  isLiveContent?: boolean;
}

interface CurrentVideo {
  videoId: string;
  title: string;
  viewCount: string;
  likeCount: string;
  superTitle: string;
  publishDate: string;
  publishedAt: string;
  channelId: string;
  channelTitle: string;
  channelThumbnail: ChannelThumbnail[];
  subscriberCountText: string;
  subscriberCount: number;
  channelBadges: string[];
  description: string;
  commentCountText: string;
  commentCount: number;
}

interface ChannelThumbnail {
  url: string;
  width: number;
  height: number;
}