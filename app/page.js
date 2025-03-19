import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center text-white">
      
      {/* Background Image (Now completely visible) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/newskyline.jpg')",
        }}
      ></div>

      {/* Content (Still above the background) */}
      <section className="relative text-center p-6 z-10">
      <Image 
  src="/logo.png" 
  alt="AJC Drone Works Logo" 
  width={600}  // ⬆ Increased size from 300 to 400
  height={300} 
  className="mb-6 mx-auto block"
 />
<h1 className="text-6xl font-bold tracking-widest uppercase text-white relative">
  <span className="absolute inset-0 text-cyan-400 -z-10 blur-lg">SEEING IS BELIEVING</span>
  SEEING IS BELIEVING
</h1>
<p className="text-lg mt-2 tracking-widest relative font-bold">
  <span className="absolute inset-0 text-cyan-500 -z-10 blur-lg font-extrabold">
    AJC DroneWorks LLC provides Part 107 Certified UAS Drone Pilot Services.
  </span>
  <span className="absolute inset-0 text-cyan-400 -z-10 blur-md">
    AJC DroneWorks LLC provides Part 107 Certified UAS Drone Pilot Services.
  </span>
  AJC DroneWorks LLC provides Part 107 Certified UAS Drone Pilot Services.
</p>

        <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition">
          See and Believe
        </button>
      </section>

    </main>
  );
}
