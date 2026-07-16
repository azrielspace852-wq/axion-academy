import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "AXION Academy",
  description: "Belajar Python & Cyber Security dari HP, dipersembahkan oleh AXION Neuralis",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="dark">
      <body className="bg-gray-900 text-gray-100 min-h-screen flex flex-col">
        <nav className="border-b border-gray-700 p-4 bg-gray-800 sticky top-0 z-10">
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-cyan-400 text-xl font-bold">🧠 AXION</span>
              <span className="text-white text-xl font-bold">Academy</span>
            </div>
            <div className="flex gap-6">
              <Link href="/python" className="hover:text-cyan-300 text-sm md:text-base">Python</Link>
              <Link href="/cyber" className="hover:text-cyan-300 text-sm md:text-base">Cyber</Link>
            </div>
          </div>
        </nav>
        <main className="flex-1 max-w-5xl mx-auto p-4 w-full">
          {children}
        </main>
        <footer className="border-t border-gray-700 p-4 text-center text-gray-400 text-sm bg-gray-800">
          © 2026 AXION Neuralis — Dibuat untuk belajar dari HP
        </footer>
      </body>
    </html>
  );
}