import { useState, useRef, useEffect } from "react";

function VideoPlayer({ src, isPlaying, setIsPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }, [isPlaying]);

  return (
    <video
      ref={ref}
      src={src}
      onPlay={() => setIsPlaying(true)}
      onPause={() => setIsPlaying(false)}
      loop
      playsInline
      width="75%"
      height="500px"
    />
  );
}


export default VideoPlayer;