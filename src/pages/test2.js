import React, { useRef, useState } from "react";
import "/src/assets/css/common1.css";

const MediaTabs = () => {
  const [activeTab, setActiveTab] = useState("videos");

  const videoRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(null);

  const videos = [
    { id: 1, src: "http://mohammeds108.sg-host.com/wp-content/uploads/2023/05/tamam-reel-1.mp4" },
    { id: 2, src: "http://mohammeds108.sg-host.com/wp-content/uploads/2023/06/homework-reel-3.mp4" },
    { id: 3, src: "http://mohammeds108.sg-host.com/wp-content/uploads/2023/05/emovers-reel-1.mp4" },
  ];

  const images = [
    { id: 1, src: "https://www.wp.emqubeweb.com/wp-content/uploads/cc-social-media-thumb.jpg", link: "https://www.instagram.com/corporateconnectionsuae/" },
    { id: 2, src: "https://www.wp.emqubeweb.com/wp-content/uploads/emovers-social-media-thumb-v1.jpg", link: "https://instagram.com/emoversuae/" },
    { id: 3, src: "https://www.wp.emqubeweb.com/wp-content/uploads/tamam-social-media-thumb-v1.jpg", link: "https://www.instagram.com/tamammovers/" },
  ];

  const handleToggle = (index) => {
    const currentVideo = videoRefs.current[index];

    // Pause all videos
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause();
      }
    });

    // Toggle
    if (activeIndex === index) {
      currentVideo.pause();
      setActiveIndex(null);
    } else {
      currentVideo.play();
      setActiveIndex(index);
    }
  };

  return (
    <div className="media-tabs">

      {/* 🔹 Tabs */}
      <div className="tabs">
        <button
          className={activeTab === "videos" ? "active" : ""}
          onClick={() => setActiveTab("videos")}
        >
          Videos
        </button>
        <button
          className={activeTab === "images" ? "active" : ""}
          onClick={() => setActiveTab("images")}
        >
          Images
        </button>
      </div>

      {/* 🔹 Tab Content */}
      <div className="tab-content">

        {/* ✅ VIDEOS */}
        {activeTab === "videos" && (
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

                  <div className="play-btn">
                    {activeIndex === index ? "❚❚" : "▶"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ✅ IMAGES */}
        {activeTab === "images" && (
          <div className="image-list">
            {images.map((img) => (
              <div key={img.id} className="image-item">
                <a href={img.link} target="_blank" rel="noreferrer">
                  <img src={img.src} alt="" />
                </a>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default MediaTabs;