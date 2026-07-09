import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="text-center max-w-3xl">
        <div className="mb-8 flex justify-center">
          <div className="relative w-48 h-48 rounded-full border-4 border-blue-400 overflow-hidden">
            <Image
              src="/profile.jpg"
              alt="Gowri M S"
              fill
              className="object-cover object-[center_25%]"
              priority
              unoptimized // <-- Ithu add cheyyu image ku vendi
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hi, I'm <span className="text-blue-400">Gowri M S</span> 👋
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Full Stack Developer | Building cool stuff with Next.js & React
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="/projects/"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition"
          >
            View Projects
          </a>

          <a
            href="/contact/"
            className="border-2 border-blue-400 hover:bg-blue-400 hover:text-gray-900 text-blue-400 font-bold py-3 px-8 rounded-lg text-lg transition"
          >
            Contact Me
          </a>

          <a
            href="/resume.pdf"
            download
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </main>
  );
}