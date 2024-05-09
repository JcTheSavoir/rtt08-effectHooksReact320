import './App.css';
import { useState, useRef, useEffect } from "react";
import VideoPlayer from "./components/VideoPlayer"
function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <>
        <button onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <VideoPlayer
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          // replace "stock.mov" with a video file
          src="file_example_MOV_480_700kB.mov"
        />
      </>



    </div>
  );
}

export default App;
