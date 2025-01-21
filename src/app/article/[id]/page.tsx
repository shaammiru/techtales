import { notFound } from "next/navigation";
import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "Mengenal Next.js 15",
    description: "Fitur baru di Next.js 15 yang wajib diketahui.",
    content: "Ini adalah detail lengkap tentang Next.js 15.",
  },
  {
    id: 2,
    title: "TypeScript: Panduan Pemula",
    description: "Kenapa TypeScript penting untuk pengembangan modern?",
    content: "Panduan lengkap untuk memulai dengan TypeScript.",
  },
  {
    id: 3,
    title: "Tailwind CSS: Gaya Cepat dan Mudah",
    description: "Mempercepat styling dengan utility-first CSS.",
    content: "Belajar cara menggunakan Tailwind CSS dengan efisien.",
  },
];

export default function ArticleDetail({ params }: { params: { id: string } }) {
  const article = articles.find((a) => a.id === parseInt(params.id));

  if (!article) {
    notFound();
  }

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">{article?.title}</h1>
      <p className="text-gray-700 mb-4">{article?.description}</p>
      <p>{article?.content}</p>
      <Link href="/" className="text-blue-500 hover:underline mt-6 block">
        ← Kembali ke Home
      </Link>
    </main>
  );
}
