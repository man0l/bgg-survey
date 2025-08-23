import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function Landing() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-4">OPSCORE Survey</h1>
        <p className="text-gray-600 mb-8">Discover your agency’s operational maturity and get tailored recommendations.</p>
        <Link href="/survey">
          <Button className="px-8 py-4">Start Survey</Button>
        </Link>
      </div>
    </main>
  );
}


