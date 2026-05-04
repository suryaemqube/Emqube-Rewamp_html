import React, { useRef, useState } from "react";
import "/src/assets/css/common1.css";

const VideoList = () => {
  const videoRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(null);

  const videos = [
    { id: 1, src: "http://mohammeds108.sg-host.com/wp-content/uploads/2023/05/tamam-reel-1.mp4" },
    { id: 2, src: "http://mohammeds108.sg-host.com/wp-content/uploads/2023/06/homework-reel-3.mp4" },
    { id: 3, src: "http://mohammeds108.sg-host.com/wp-content/uploads/2023/05/emovers-reel-1.mp4" },
  ];

  const handleToggle = (index) => {
    const currentVideo = videoRefs.current[index];

    // Pause all other videos
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause();
      }
    });

    // Toggle current
    if (activeIndex === index) {
      currentVideo.pause();
      setActiveIndex(null);
    } else {
      currentVideo.play();
      setActiveIndex(index);
    }
  };

  return (
    <div className="video-list-pradnya">
      {videos.map((video, index) => (
        <div key={video.id} className="video-item">
          <div
            className="video-wrapper"
            onClick={() => handleToggle(index)}
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={video.src}
              muted
              playsInline
              preload="metadata"
              className="video"
            />
            {/* Overlay Button */}
            <div className="play-btn">
              {activeIndex === index ? "❚❚" : "▶"}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoList;