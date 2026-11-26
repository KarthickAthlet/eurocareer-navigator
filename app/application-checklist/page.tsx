import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: "Prepare an application | EuroCareer Navigator" };

export default function Page() {
  return (
    <main>
      <Link href="/">EuroCareer Navigator</Link>
      <h1>{"Prepare an application"}</h1>
      <p>{"Gather what you need before submitting to an employer."}</p>
      <ul>
        <li>{"Save the original job listing and closing date."}</li>
        <li>{"Tailor your résumé and note any documents the employer requests."}</li>
        <li>{"Record when you applied and when you want to follow up."}</li>
      </ul>
    </main>
  );
}
