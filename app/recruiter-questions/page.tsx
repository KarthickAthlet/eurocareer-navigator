import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: "Plan your recruiter questions | EuroCareer Navigator" };

export default function Page() {
  return (
    <main>
      <Link href="/">EuroCareer Navigator</Link>
      <h1>{"Plan your recruiter questions"}</h1>
      <p>{"Use these questions to clarify practical details early."}</p>
      <ul>
        <li>{"Where is the team based and what is the expected working arrangement?"}</li>
        <li>{"What are the interview stages and approximate timeline?"}</li>
        <li>{"Who can confirm the relocation and work authorization process?"}</li>
      </ul>
    </main>
  );
}
