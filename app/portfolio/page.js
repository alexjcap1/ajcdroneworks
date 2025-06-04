'use client';

export default function Portfolio() {
  return (
    <main
      className="min-h-screen py-12 bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/Portfoliobackground.jpg')" }}
    >
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-6xl font-bold text-blue-500 mb-12 pt-20 font-orbitron tracking-wide">
          Portfolio
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto font-orbitron mb-16">
          A showcase of our aerial work — cinematography, voiceovers, mapping, and real estate flyovers.
        </p>

        {/* TikTok Embeds */}
        <div className="flex flex-wrap justify-center gap-10">
          {/* TikTok 1 */}
          <div className="w-[400px] h-[711px] rounded-lg overflow-hidden shadow-lg bg-black">
            <iframe
              src="https://www.tiktok.com/embed/v2/7496260842892184863"
              className="w-full h-full border-none"
              scrolling="no"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <p className="mt-3 text-base text-gray-200 font-orbitron text-center">
              Cinematic Neighborhood Showcase
            </p>
          </div>

          {/* TikTok 2 */}
          <div className="w-[400px] h-[711px] rounded-lg overflow-hidden shadow-lg bg-black">
            <iframe
              src="https://www.tiktok.com/embed/v2/7473688262654102815"
              className="w-full h-full border-none"
              scrolling="no"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <p className="mt-3 text-base text-gray-200 font-orbitron text-center">
              Drone Video with Voiceover Commentary
            </p>
          </div>
        </div>

        {/* 2D & 3D Mapping Section */}
        <h2 className="text-4xl font-bold text-blue-400 mt-20 mb-8 font-orbitron text-center">
          2D & 3D Mapping Examples
        </h2>

        <div className="flex flex-wrap justify-center gap-10">
          {/* 2D Mapping Video */}
          <div className="w-[400px] h-[711px] bg-black rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
            <video
              src="/Orthophoto output.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain"
            />
            <p className="mt-3 text-base text-gray-200 font-orbitron text-center px-2">
              Orthophoto Zoom-In: Precision stitched aerial map
            </p>
          </div>

          {/* 3D Model Placeholder */}
          <div className="w-[400px] h-[711px] bg-gray-800 rounded-lg shadow-lg flex items-center justify-center">
            <p className="text-gray-400 font-orbitron italic text-lg text-center px-4">
              [ 3D Model Viewer Placeholder — Coming Soon ]
            </p>
          </div>
        </div>

        {/* More Content Section */}
        <h2 className="text-4xl font-bold text-blue-400 mt-20 mb-8 font-orbitron">
          More Content
        </h2>

        <div className="flex flex-wrap justify-center gap-10">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/reel/DFvUnS8R3KK/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-[400px] h-[711px] hover:scale-105 transition transform"
          >
            <img
              src="/reel-thumb-realestate.png"
              alt="Instagram Reel"
              className="w-full h-full object-cover rounded shadow-lg"
            />
            <p className="mt-3 text-base text-gray-200 font-orbitron text-center">
              Real Estate Flyover (Instagram)
            </p>
          </a>

          {/* YouTube */}
          <a
            href="https://youtu.be/iBqHL_yMhuI"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-[400px] h-[711px] hover:scale-105 transition transform"
          >
            <img
              src="/thumb-youtube-oceancity.png"
              alt="YouTube Ocean City"
              className="w-full h-full object-cover rounded shadow-lg"
            />
            <p className="mt-3 text-base text-gray-200 font-orbitron text-center">
              Ocean City Boardwalk Cinematics (YouTube)
            </p>
          </a>
        </div>
      </div>
    </main>
  );
}
