import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: "Review an offer | EuroCareer Navigator" };

export default function Page() {
  return (
    <main>
      <Link href="/">EuroCareer Navigator</Link>
      <h1>{"Review an offer"}</h1>
      <p>{"Compare the terms in writing before deciding."}</p>
      <ul>
        <li>{"Check base pay, variable pay, and when each is paid."}</li>
        <li>{"Clarify work location, start date, and any relocation support."}</li>
        <li>{"List open questions to resolve with the employer."}</li>
      </ul>
    </main>
  );
}
