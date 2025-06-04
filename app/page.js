import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/newskyline.jpg')",
        }}
      ></div>

      {/* Content */}
      <section className="relative text-center px-4 sm:px-6 md:px-10 py-10 z-10 max-w-3xl">
        <Image
          src="/logo.png"
          alt="AJC Drone Works Logo"
          width={600}
          height={300}
          className="mb-6 mx-auto w-full max-w-xs sm:max-w-md"
        />

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-widest uppercase text-white relative">
          <span className="absolute inset-0 text-cyan-400 -z-10 blur-lg">SEEING IS BELIEVING</span>
          SEEING IS BELIEVING
        </h1>

        <p className="mt-4 text-sm sm:text-base md:text-lg tracking-widest relative font-bold">
          <span className="absolute inset-0 text-cyan-500 -z-10 blur-lg font-extrabold">
            AJC DroneWorks LLC provides Part 107 Certified UAS Drone Pilot Services.
          </span>
          <span className="absolute inset-0 text-cyan-400 -z-10 blur-md">
            AJC DroneWorks LLC provides Part 107 Certified UAS Drone Pilot Services.
          </span>
          AJC DroneWorks LLC provides Part 107 Certified UAS Drone Pilot Services.
        </p>

        <Link href="/portfolio">
          <button className="mt-8 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition">
            See and Believe
          </button>
        </Link>
      </section>
    </main>
  );
}
