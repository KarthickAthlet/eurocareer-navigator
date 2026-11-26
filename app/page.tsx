import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <nav aria-label="Career tools">
        <Link href="/application-tracker">Application tracker</Link>
      </nav>
      <h1>EuroCareer Navigator</h1>
      <p>Explore career opportunities across Europe.</p>
    </main>
  );
}
