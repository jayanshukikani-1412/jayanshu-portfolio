import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-b from-gray-900 to-gray-600">
      <h1 className="text-[140px] font-bold text-white text-balance">JAYANSHU</h1>
      <h2 className="text-[140px] font-bold text-white text-balance">KIKANI</h2>
      <Link href={"https://www.stefanobartoletti.it/"} className="text-white text-balance text-[40px]">PORTFOLIO LINK</Link>
    </main>
  );
}
