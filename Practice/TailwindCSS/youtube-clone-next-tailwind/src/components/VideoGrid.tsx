import VideoCard from "./VideoCard";

const VIDEOS = [
  {
    title: "My neighbourhood in Germany",
    thumbimage: "thumbnail1.jpg",
    channellogo: "logo1.jpg",
    author: "German Life",
    views: "713K views",
    timestamp: "7 months ago",
  },
  {
    title: "My neighbourhood in Germany",
    thumbimage: "thumbnail1.jpg",
    channellogo: "logo1.jpg",
    author: "German Life",
    views: "713K views",
    timestamp: "7 months ago",
  },
  {
    title: "My neighbourhood in Germany",
    thumbimage: "thumbnail1.jpg",
    channellogo: "logo1.jpg",
    author: "German Life",
    views: "713K views",
    timestamp: "7 months ago",
  },
  {
    title: "My neighbourhood in Germany",
    thumbimage: "thumbnail1.jpg",
    channellogo: "logo1.jpg",
    author: "German Life",
    views: "713K views",
    timestamp: "7 months ago",
  },
  {
    title: "My neighbourhood in Germany",
    thumbimage: "thumbnail1.jpg",
    channellogo: "logo1.jpg",
    author: "German Life",
    views: "713K views",
    timestamp: "7 months ago",
  },
  {
    title: "My neighbourhood in Germany",
    thumbimage: "thumbnail1.jpg",
    channellogo: "logo1.jpg",
    author: "German Life",
    views: "713K views",
    timestamp: "7 months ago",
  },
  {
    title: "My neighbourhood in Germany",
    thumbimage: "thumbnail1.jpg",
    channellogo: "logo1.jpg",
    author: "German Life",
    views: "713K views",
    timestamp: "7 months ago",
  },
  {
    title: "My neighbourhood in Germany",
    thumbimage: "thumbnail1.jpg",
    channellogo: "logo1.jpg",
    author: "German Life",
    views: "713K views",
    timestamp: "7 months ago",
  },
  {
    title: "My neighbourhood in Germany",
    thumbimage: "thumbnail1.jpg",
    channellogo: "logo1.jpg",
    author: "German Life",
    views: "713K views",
    timestamp: "7 months ago",
  },
  {
    title: "My neighbourhood in Germany",
    thumbimage: "thumbnail1.jpg",
    channellogo: "logo1.jpg",
    author: "German Life",
    views: "713K views",
    timestamp: "7 months ago",
  },
  {
    title: "My neighbourhood in Germany",
    thumbimage: "thumbnail1.jpg",
    channellogo: "logo1.jpg",
    author: "German Life",
    views: "713K views",
    timestamp: "7 months ago",
  },
  {
    title: "My neighbourhood in Germany",
    thumbimage: "thumbnail1.jpg",
    channellogo: "logo1.jpg",
    author: "German Life",
    views: "713K views",
    timestamp: "7 months ago",
  },
  {
    title: "My neighbourhood in Germany",
    thumbimage: "thumbnail1.jpg",
    channellogo: "logo1.jpg",
    author: "German Life",
    views: "713K views",
    timestamp: "7 months ago",
  },
  {
    title: "My neighbourhood in Germany",
    thumbimage: "thumbnail1.jpg",
    channellogo: "logo1.jpg",
    author: "German Life",
    views: "713K views",
    timestamp: "7 months ago",
  },
  {
    title: "My neighbourhood in Germany",
    thumbimage: "thumbnail1.jpg",
    channellogo: "logo1.jpg",
    author: "German Life",
    views: "713K views",
    timestamp: "7 months ago",
  },
  {
    title: "My neighbourhood in Germany",
    thumbimage: "thumbnail1.jpg",
    channellogo: "logo1.jpg",
    author: "German Life",
    views: "713K views",
    timestamp: "7 months ago",
  },
];

export function VideoGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {VIDEOS.map((video) => (
        <div>
          <VideoCard
            title={video.title}
            thumbimage={video.thumbimage}
            channellogo={video.channellogo}
            author={video.author}
            views={video.views}
            timestamp={video.timestamp}
          ></VideoCard>
        </div>
      ))}
    </div>
  );
}
