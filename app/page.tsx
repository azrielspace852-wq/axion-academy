import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center py-10">
      <h1 className="text-4xl md:text-5xl font-bold">
        <span className="text-cyan-400">AXION</span>
        <span className="text-white"> Academy</span>
      </h1>
      <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
        Belajar <span className="text-green-400">Python</span> dan{" "}
        <span className="text-red-400">Cyber Security</span> langsung dari HP,
        dengan panduan praktis di Termux.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-3xl mx-auto">
        <Link
          href="/python"
          className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 border border-gray-600 transition-all hover:scale-105"
        >
          <h2 className="text-2xl font-bold text-green-400">🐍 Python</h2>
          <p className="text-gray-300 mt-2 text-sm">
            Dari variabel sampai library Requests & BeautifulSoup
          </p>
        </Link>

        <Link
          href="/cyber"
          className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 border border-gray-600 transition-all hover:scale-105"
        >
          <h2 className="text-2xl font-bold text-red-400">🛡️ Cyber Security</h2>
          <p className="text-gray-300 mt-2 text-sm">
            OSINT, Web Security, dan tools di Termux
          </p>
        </Link>
      </div>
    </div>
  );
}