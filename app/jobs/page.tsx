import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Job discovery | EuroCareer Navigator',
  description: 'Explore job discovery for Germany, the Netherlands, and Ireland.',
};

export default function JobsPage() {
  return (
    <main>
      <Link href="/">EuroCareer Navigator</Link>
      <h1>Job discovery</h1>
      <p>Find opportunities in Germany, the Netherlands, and Ireland.</p>
      <h2>Available vacancies</h2>
      <p>No vacancies are listed yet.</p>
    </main>
  );
}
