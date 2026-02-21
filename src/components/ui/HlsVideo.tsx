import { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import { cn } from '../../lib/utils';

interface HlsVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
}

export function HlsVideo({ src, className, ...props }: HlsVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch((e) => console.log("Auto-play prevented", e));
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // For Safari
      video.src = src;
      video.addEventListener('loadedmetadata', () => {
        video.play().catch((e) => console.log("Auto-play prevented", e));
      });
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [src]);

  return <video ref={videoRef} className={cn(className)} {...props} />;
}