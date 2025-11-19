import React from "react";

function Video() {
  const mediaItems = [
    { type: "website", url: "https://www.shauryaskinandhairclinic.com/" },
    {
      type: "video",
      url: "https://ik.imagekit.io/graphi/GraphiMedia/1.mov/ik-video.mp4?updatedAt=1760868925523",
      poster: "https://ik.imagekit.io/graphi/GraphiMedia/1.jpg",
    },
    {
      type: "video",
      url: "https://ik.imagekit.io/graphi/GraphiMedia/2.mov/ik-video.mp4?updatedAt=1760868925405",
      poster: "https://ik.imagekit.io/graphi/GraphiMedia/2.jpg",
    },
    {
      type: "video",
      url: "https://ik.imagekit.io/graphi/GraphiMedia/3.mov/ik-video.mp4?updatedAt=1760868928906",
      poster: "https://ik.imagekit.io/graphi/GraphiMedia/3.jpg",
    },
    {
      type: "video",
      url: "https://ik.imagekit.io/graphi/GraphiMedia/4.mov/ik-video.mp4?updatedAt=1760868921828",
      poster: "https://ik.imagekit.io/graphi/GraphiMedia/4.jpg",
    },
  ];

  return (
    <section className="py-16  bg-black">
      <h2 className="text-4xl md:text-5xl font-bold  text-center mb-12 text-white">
        Our Work
      </h2>

      {/* Desktop Slider */}
      <div className="hidden  md:block ">
        <div className="flex justify-center items-center min-h-[600px] relative w-full max-w-6xl mx-auto">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className="absolute transition-all duration-500 ease-in-out cursor-pointer group"
              style={{
                left: `${10 + index * 18}%`,
                zIndex: index === 0 ? 50 : 40 - index,
                transform: index === 0 ? "scale(1.1)" : "scale(0.9)",
              }}
              onMouseEnter={(e) => {
                const cards = e.currentTarget.parentElement?.children;
                if (cards) {
                  Array.from(cards).forEach((card, i) => {
                    const cardElement = card;
                    if (i === index) {
                      cardElement.style.zIndex = "50";
                      cardElement.style.transform = "scale(1.1)";
                    } else if (i < index) {
                      cardElement.style.zIndex = `${49 - i}`;
                      cardElement.style.transform = "scale(0.9)";
                      cardElement.style.left = `${10 + i * 12}%`;
                    } else {
                      cardElement.style.zIndex = `${49 - i}`;
                      cardElement.style.transform = "scale(0.9)";
                      cardElement.style.left = `${18 + i * 12}%`;
                    }
                  });
                }
              }}
            >
              <div className="w-72 h-[500px] bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-gray-200 group-hover:border-[#4B2178] transition-all duration-300 relative">
                {item.type === "website" ? (
                  <iframe
                    src={item.url}
                    className="w-full h-full"
                    title="Website Preview"
                    style={{
                      transform: "scale(0.3)",
                      transformOrigin: "top left",
                      width: "333%",
                      height: "333%",
                    }}
                  />
                ) : (
                  <video
                    src={item.url}
                    preload="metadata"
                    className="w-full h-full object-cover"
                    loop
                    muted
                    onMouseEnter={(e) => {
                      e.currentTarget.muted = false;
                      e.currentTarget.play();
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.muted = true;
                      e.currentTarget.pause();
                    }}
                  />
                )}

                {/* Button appears on hover */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#4B2178] text-white text-sm font-semibold rounded-full shadow-lg hover:bg-[#6b31b0] transition"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Slider */}
      <div className="md:hidden">
        <div className="flex flex-col items-center space-y-8 min-h-[600px]">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className="transition-all duration-700 ease-in-out scroll-animate-scale w-full"
            >
              <div className="w-full aspect-[9/16] bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-gray-200 relative">
                {item.type === "website" ? (
                  <iframe
                    src={item.url}
                    className="w-full h-full"
                    title="Website Preview"
                    style={{
                      transform: "scale(0.3)",
                      transformOrigin: "top left",
                      width: "333%",
                      height: "333%",
                    }}
                  />
                ) : (
                  <video
                    poster={item.poster}
                    className="w-full h-full object-cover"
                    loop
                    playsInline
                    preload="metadata"
                    webkit-playsinline="true"
                    x5-playsinline="true"
                    crossOrigin="anonymous"
                    ref={(videoElement) => {
                      if (videoElement) {
                        videoElement.src = item.url;
                        videoElement.style.backgroundColor = "#000";

                        const observer = new IntersectionObserver(
                          (entries) => {
                            entries.forEach((entry) => {
                              if (
                                entry.isIntersecting &&
                                entry.intersectionRatio > 0.7
                              ) {
                                if (videoElement.readyState < 2) {
                                  videoElement.load();
                                }

                                const tryPlay = () => {
                                  videoElement.play().catch(() => {
                                    setTimeout(() => {
                                      videoElement.play().catch(() => {});
                                    }, 500);
                                  });
                                };

                                if (videoElement.readyState >= 3) {
                                  tryPlay();
                                } else {
                                  videoElement.addEventListener(
                                    "canplay",
                                    tryPlay,
                                    { once: true }
                                  );
                                }

                                const container = entry.target.closest(
                                  ".scroll-animate-scale"
                                );
                                if (container) {
                                  container.classList.add(
                                    "scale-110",
                                    "z-[10000]"
                                  );
                                  container.classList.remove(
                                    "scale-90",
                                    "z-40"
                                  );
                                }
                              } else {
                                videoElement.pause();
                                const container = entry.target.closest(
                                  ".scroll-animate-scale"
                                );
                                if (container) {
                                  container.classList.remove(
                                    "scale-110",
                                    "z-[10000]"
                                  );
                                  container.classList.add("scale-90", "z-40");
                                }
                              }
                            });
                          },
                          {
                            threshold: [0.3, 0.7],
                            rootMargin: "-20% 0px -20% 0px",
                          }
                        );
                        observer.observe(videoElement);

                        videoElement.addEventListener("error", (e) => {
                          console.error("Video load error:", e);
                          videoElement.poster = item.poster;
                        });
                      }
                    }}
                  />
                )}

                {/* Mobile “View Project” button */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#4B2178] text-white text-sm font-semibold rounded-full shadow-lg hover:bg-[#6b31b0] transition"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Video;
