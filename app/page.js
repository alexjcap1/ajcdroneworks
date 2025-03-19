import Image from "next/image";

export default function Home() {
  return (
    <main 
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/skylineoverwooder.jpg')" }}
    >
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <section className="relative text-center p-6 z-10">
        {/* Logo */}
        <Image 
          src="/logo.png" 
          alt="AJC Drone Works Logo" 
          width={300} 
          height={150} 
          className="mb-6"
        />

        {/* Main Text */}
        <h1 className="text-6xl font-bold tracking-wide">SEEING IS BELIEVING</h1>
        <p className="text-lg mt-2 tracking-widest">
          AJC DroneWorks LLC provides Part 107 Certified UAS Drone Pilot Services.
        </p>

        {/* Call to Action */}
        <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition">
          Learn More
        </button>
      </section>
    </main>
  );
}
