import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <p>Next.js with Tanstack query and Zustand</p>
      <Link href={"./users"}>users</Link>
    </main>
  );
}
