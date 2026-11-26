import Link from 'next/link';
import type { Metadata } from 'next';
import ApplicationTracker from './tracker';

export const metadata: Metadata = {
  title: 'Application tracker | EuroCareer Navigator',
};

export default function ApplicationTrackerPage() {
  return (
    <main>
      <Link href="/">EuroCareer Navigator</Link>
      <h1>Application tracker</h1>
      <ApplicationTracker />
    </main>
  );
}
