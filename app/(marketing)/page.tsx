import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';

export default function Landing() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="max-w-3xl w-full text-center">
        <div className="mb-6 flex justify-center">
          <Image src="/globe.svg" alt="Big Growth Group logo" width={48} height={48} />
        </div>
        <p className="text-sm font-semibold tracking-wide text-indigo-600 uppercase mb-2">
          Your OPSCORE™ Agency Scale Readiness Assessment
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          What’s Actually Holding You Back…
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          This isn’t a fluff quiz. It’s a strategic breakdown of what’s stopping your agency
          from scaling without depending on the founder.
        </p>

        <div className="mx-auto max-w-3xl">
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-2 shadow-sm">
            <div className="aspect-video relative overflow-hidden rounded-lg bg-black/70 flex items-center justify-center">
              <div className="text-white/80 text-sm">[2 min VSL]</div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Link href="/survey" aria-label="Start the assessment">
            <Button className="px-8 py-4">Start The Assessment (3 min)</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
