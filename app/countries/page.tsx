import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: "Explore destinations | EuroCareer Navigator" };

export default function Page() {
  return (
    <main>
      <Link href="/">EuroCareer Navigator</Link>
      <h1>{"Explore destinations"}</h1>
      <p>{"Start by comparing Germany, the Netherlands, and Ireland."}</p>
      <ul>
        <li>{"Check which cities and roles fit your goals."}</li>
        <li>{"Compare language expectations, commute, and relocation support."}</li>
        <li>{"Keep a shortlist before spending time on applications."}</li>
      </ul>
    </main>
  );
}
