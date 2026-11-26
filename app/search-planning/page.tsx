import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: "Plan your job search | EuroCareer Navigator" };

export default function Page() {
  return (
    <main>
      <Link href="/">EuroCareer Navigator</Link>
      <h1>{"Plan your job search"}</h1>
      <p>{"Create a routine around the roles and locations you want."}</p>
      <ul>
        <li>{"Pick a few target titles and locations."}</li>
        <li>{"Set aside time to review new postings and follow up."}</li>
        <li>{"Revisit your shortlist based on the responses you receive."}</li>
      </ul>
    </main>
  );
}
