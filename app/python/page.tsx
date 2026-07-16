import Link from "next/link";
import { getPostsByCategory } from "@/lib/posts";

export default function PythonPage() {
  const posts = getPostsByCategory("python");

  return (
    <div>
      <h1 className="text-3xl font-bold text-green-400">🐍 Belajar Python</h1>
      <p className="text-gray-300 mt-2">Pilih topik di bawah ini:</p>

      <div className="grid grid-cols-1 gap-4 mt-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/python/${post.slug}`}
            className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 border border-gray-600 transition"
          >
            <h2 className="text-xl font-semibold text-cyan-300">{post.title}</h2>
            {post.description && (
              <p className="text-gray-400 text-sm mt-1">{post.description}</p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}