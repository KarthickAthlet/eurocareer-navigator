import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: "Plan a relocation | EuroCareer Navigator" };

export default function Page() {
  return (
    <main>
      <Link href="/">EuroCareer Navigator</Link>
      <h1>{"Plan a relocation"}</h1>
      <p>{"Organize the practical steps around a possible move."}</p>
      <ul>
        <li>{"Track employer paperwork and start-date dependencies."}</li>
        <li>{"Plan temporary accommodation and transport."}</li>
        <li>{"Keep a checklist of documents and questions for the destination."}</li>
      </ul>
    </main>
  );
}
