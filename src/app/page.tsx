import Link from "next/link";

export default function Home() {
  const articles = [
    {
      id: 1,
      title: "Mengenal Next.js 15",
      description: "Fitur baru di Next.js 15 yang wajib diketahui.",
    },
    {
      id: 2,
      title: "TypeScript: Panduan Pemula",
      description: "Kenapa TypeScript penting untuk pengembangan modern?",
    },
    {
      id: 3,
      title: "Tailwind CSS: Gaya Cepat dan Mudah",
      description: "Mempercepat styling dengan utility-first CSS.",
    },
  ];

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Tech Tales</h1>
      <ul className="space-y-4">
        {articles.map((article) => (
          <li
            key={article.id}
            className="p-4 border rounded shadow hover:bg-gray-100"
          >
            <Link href={`/article/${article.id}`}>
              <h2 className="text-xl font-semibold text-blue-500 hover:underline">
                {article.title}
              </h2>
            </Link>
            <p className="text-gray-700">{article.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
