import React, { useEffect, useRef } from "react";

// The media items containing your video and website links
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

function Video() {
  const containerRef = useRef(null);

  // Function to manually handle the CSS properties (left, zIndex, transform) for the desktop slider
  const handleMouseEnter = (e, index) => {
    const cards = e.currentTarget.parentElement?.children;
    if (cards) {
      Array.from(cards).forEach((card, i) => {
        const cardElement = card;
        // Use a base horizontal stagger (12% instead of 18% for better fit)
        const baseLeft = 10;
        const stagger = 12; 

        if (i === index) {
          // Focused card: higher scale, top z-index
          cardElement.style.zIndex = "50";
          cardElement.style.transform = "scale(1.1)";
          // Center the focused card by calculating the offset
          cardElement.style.left = `${baseLeft + index * stagger}%`; 
        } else if (i < index) {
          // Cards before the focused one: pushed slightly left
          cardElement.style.zIndex = `${49 - i}`;
          cardElement.style.transform = "scale(0.9)";
          cardElement.style.left = `${baseLeft + i * (stagger / 1.5)}%`; // Compress left stack
        } else {
          // Cards after the focused one: pushed further right
          cardElement.style.zIndex = `${49 - i}`;
          cardElement.style.transform = "scale(0.9)";
          cardElement.style.left = `${baseLeft + stagger + i * 12}%`; // Spread right stack wider
        }
      });
    }
  };

  // useEffect for Intersection Observer (Mobile) to handle video play/pause on scroll
  useEffect(() => {
    // We target the videos *inside* the mobile section (md:hidden)
    const mobileContainer = containerRef.current?.querySelector('.md\\:hidden');
    if (!mobileContainer) return;
    
    // Select only video elements that don't have the initial 'src' property (which are handled by the observer)
    const videoElements = mobileContainer.querySelectorAll('video:not([src])');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const videoElement = entry.target;

          if (entry.isIntersecting && entry.intersectionRatio > 0.7) {
            // Play video when 70% visible
            videoElement.play().catch(e => console.error("Video play failed:", e));
            // Apply scale effect
            const container = entry.target.closest(".scroll-animate-scale");
            if (container) {
              container.classList.add("scale-110", "z-[10000]");
              container.classList.remove("scale-90", "z-40");
            }
          } else {
            // Pause video when less visible
            videoElement.pause();
            // Remove scale effect
            const container = entry.target.closest(".scroll-animate-scale");
            if (container) {
              container.classList.remove("scale-110", "z-[10000]");
              container.classList.add("scale-90", "z-40");
            }
          }
        });
      },
      {
        threshold: [0.3, 0.7],
        rootMargin: "-20% 0px -20% 0px", // Adjust viewport focus area
      }
    );

    videoElements.forEach((videoElement) => {
      // Find the corresponding item to set the source
      const itemIndex = Array.from(videoElement.closest('.scroll-animate-scale').parentElement.children).indexOf(videoElement.closest('.scroll-animate-scale'));
      const item = mediaItems[itemIndex];

      if (item && item.type === 'video') {
         videoElement.src = item.url;
         videoElement.load();
      }
      observer.observe(videoElement);
    });

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);


  return (
    <section className="py-16 bg-black" ref={containerRef}>
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
        Our Work
      </h2>

      {/* --- Desktop Slider (Staggered, Hover-Controlled) --- */}
      <div className="hidden md:block">
        <div className="flex justify-center items-center min-h-[600px] relative w-full max-w-6xl mx-auto">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className="absolute transition-all duration-500 ease-in-out cursor-pointer group"
              style={{
                // Initial positioning based on index
                left: `${10 + index * 18}%`, 
                zIndex: 40 - index, // Staggered z-index for initial overlap
                transform: index === 0 ? "scale(1.1)" : "scale(0.9)", // Default scale for first item
              }}
              onMouseEnter={(e) => handleMouseEnter(e, index)}
            >
              <div className="w-72 h-[500px] bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-gray-200 group-hover:border-[#4B2178] transition-all duration-300 relative">
                
                {/* Iframe for Website */}
                {item.type === "website" ? (
                  <iframe
                    src={item.url}
                    className="w-full h-full"
                    title="Website Preview"
                    style={{
                      // Scale and translate the website down to fit the phone frame
                      transform: "scale(0.3)", 
                      transformOrigin: "top left",
                      width: "333%",
                      height: "333%",
                    }}
                  />
                ) : (
                  // Video element for Desktop
                  <video
                    src={item.url}
                    poster={item.poster}
                    preload="metadata"
                    className="w-full h-full object-cover"
                    loop
                    muted
                    // Video interaction on hover (Desktop only)
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

      {/* --- Mobile Slider (Simple Stacked, Scroll-Controlled) --- */}
      {/* Note: The Intersection Observer in useEffect handles the src and play/pause for these videos */}
      <div className="md:hidden">
        <div className="flex flex-col items-center space-y-8 min-h-[600px] px-4">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className="transition-all duration-700 ease-in-out scroll-animate-scale w-full scale-90 z-40" // Initial mobile scale
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
                  // Video setup for mobile (no src initially, loaded by useEffect)
                  <video
                    // src is intentionally omitted here and set in useEffect to optimize mobile performance
                    poster={item.poster}
                    className="w-full h-full object-cover"
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    webkit-playsinline="true"
                    x5-playsinline="true"
                    crossOrigin="anonymous"
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