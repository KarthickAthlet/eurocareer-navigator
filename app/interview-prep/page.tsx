import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: "Prepare for interviews | EuroCareer Navigator" };

export default function Page() {
  return (
    <main>
      <Link href="/">EuroCareer Navigator</Link>
      <h1>{"Prepare for interviews"}</h1>
      <p>{"Prepare short examples you can adapt to each conversation."}</p>
      <ul>
        <li>{"Choose an example of a difficult decision and explain your reasoning."}</li>
        <li>{"Describe your contribution and the result."}</li>
        <li>{"Prepare questions about the role, team, and hiring process."}</li>
      </ul>
    </main>
  );
}
