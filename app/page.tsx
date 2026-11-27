import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>EuroCareer Navigator</h1>
      <p>Explore career opportunities across Europe.</p>
      <Link href="/jobs">Explore jobs</Link>
    </main>
  );
}
