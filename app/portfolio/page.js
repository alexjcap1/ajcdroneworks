'use client';

export default function Portfolio() {
  return (
    <main
      className="min-h-screen py-12 bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/Portfoliobackground.jpg')" }}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-blue-500 mb-12 pt-20 font-orbitron tracking-wide">
          Portfolio
        </h1>

        <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto font-orbitron mb-16">
          A showcase of our aerial work — cinematography, voiceovers, mapping, and real estate flyovers.
        </p>

        {/* TikTok Embeds */}
        <div className="flex flex-wrap justify-center gap-8">
          {[
            {
              src: "https://www.tiktok.com/embed/v2/7496260842892184863",
              caption: "Cinematic Neighborhood Showcase",
            },
            {
              src: "https://www.tiktok.com/embed/v2/7473688262654102815",
              caption: "Drone Video with Voiceover Commentary",
            },
          ].map((video, idx) => (
            <div key={idx} className="w-full sm:w-[400px] aspect-[9/16] rounded-lg overflow-hidden shadow-lg bg-black">
              <iframe
                src={video.src}
                className="w-full h-full border-none"
                scrolling="no"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <p className="mt-3 text-sm sm:text-base text-gray-200 font-orbitron text-center">
                {video.caption}
              </p>
            </div>
          ))}
        </div>

        {/* 2D & 3D Mapping Section */}
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-400 mt-20 mb-8 font-orbitron">
          2D & 3D Mapping Examples
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {/* 2D Mapping Video */}
          <div className="w-full sm:w-[400px] aspect-[9/16] bg-black rounded-lg shadow-lg overflow-hidden">
            <video
              src="/Orthophoto output.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain"
            />
            <p className="mt-3 text-sm sm:text-base text-gray-200 font-orbitron text-center px-2">
              Orthophoto Zoom-In: Precision stitched aerial map
            </p>
          </div>

          {/* 3D Model Output */}
          <div className="w-full sm:w-[400px] aspect-[9/16] bg-black rounded-lg shadow-lg flex items-center justify-center">
            <video controls className="w-full h-auto rounded-lg">
              <source src="/3d-model-output.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div> {/* <-- This div was missing, now added to close the flex-wrap */}


        {/* More Content Section */}
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-400 mt-20 mb-8 font-orbitron">
          More Content
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {/* Instagram Reel */}
          <a
            href="https://www.instagram.com/reel/DFvUnS8R3KK/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full sm:w-[400px] aspect-[9/16] hover:scale-105 transition-transform"
          >
            <img
              src="/reel-thumb-realestate.png"
              alt="Instagram Reel"
              className="w-full h-full object-cover rounded shadow-lg"
            />
            <p className="mt-3 text-sm sm:text-base text-gray-200 font-orbitron text-center">
              Real Estate Flyover (Instagram)
            </p>
          </a>

          {/* YouTube Video */}
          <a
            href="https://youtu.be/iBqHL_yMhuI"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full sm:w-[400px] aspect-[9/16] hover:scale-105 transition-transform"
          >
            <img
              src="/thumb-youtube-oceancity.png"
              alt="YouTube Ocean City"
              className="w-full h-full object-cover rounded shadow-lg"
            />
            <p className="mt-3 text-sm sm:text-base text-gray-200 font-orbitron text-center">
              Ocean City Boardwalk Cinematics (YouTube)
            </p>
          </a>
        </div>
      </div>
    </main>
  );
}
