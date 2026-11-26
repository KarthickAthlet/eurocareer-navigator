import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: "Read sponsorship signals | EuroCareer Navigator" };

export default function Page() {
  return (
    <main>
      <Link href="/">EuroCareer Navigator</Link>
      <h1>{"Read sponsorship signals"}</h1>
      <p>{"Use the employer’s own wording to assess whether a role is worth investigating."}</p>
      <ul>
        <li>{"Look for explicit sponsorship or work authorization language."}</li>
        <li>{"Treat silence as unknown and keep a link to the original posting."}</li>
        <li>{"Ask the recruiter to confirm whether sponsorship is available for the specific role."}</li>
      </ul>
    </main>
  );
}
