import { useEffect, useRef, useState } from "react";
import formatDuration from "../utilities/formatDuration";
import { formatTimeAgo } from "../utilities/formatTimeAgo";

const VIEW_FORMATTER = new Intl.NumberFormat(undefined, {
  notation: "compact",
});

function VideoGridItem({
  id,
  title,
  channel,
  views,
  postedAt,
  duration,
  thumbnailUrl,
  videoUrl,
}) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(
    function () {
      if (videoRef === null) return;
      if (isVideoPlaying) {
        videoRef.current.currentTime = 0;
        videoRef?.current?.play();
      } else {
        videoRef?.current?.pause();
      }
    },
    [isVideoPlaying]
  );

  return (
    <div
      className="flex flex-col gap-2"
      onMouseEnter={() => setIsVideoPlaying(true)}
      onMouseLeave={() => setIsVideoPlaying(false)}
    >
      <a href={`/watch?v=${id}`} className="relative aspect-video block">
        <img
          src={thumbnailUrl}
          alt={title}
          className={`block h-full object-cover transition-[border-radius] duration-200 ${
            isVideoPlaying ? "rounded-none" : "rounded-xl"
          }`}
        />
        <div className="absolute bottom-1 right-1 bg-gray-900 text-sm text-white px-0.5 rounded">
          {formatDuration(duration)}
        </div>
        <video
          ref={videoRef}
          muted
          playsInline
          src={videoUrl}
          className={`block h-full object-cover absolute inset-0 transition-opacity duration-500 ${
            isVideoPlaying ? "opacity-100  delay-200" : "opacity-0"
          }`}
        />
      </a>
      <div className="flex gap-2">
        <a href={`/@${channel.id}`} className="flex-shrink-0">
          <img
            src={channel.profileUrl}
            alt=""
            className="h-12 w-12 rounded-full"
          />
        </a>
        <div className="flex flex-col gap-1">
          <a href={`/watch?v=${id}`} className="font-bold">
            {title}
          </a>
          <a href={channel.profileUrl} className="text-sm">
            {channel.name}
          </a>

          <div className="text-sm">{`${VIEW_FORMATTER.format(
            views
          )} views • ${formatTimeAgo(postedAt)}`}</div>
        </div>
      </div>
    </div>
  );
}

export default VideoGridItem;
