import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';

export default function Landing() {
  return (
    <>
      <main className="min-h-[768px] md:min-h-screen bg-white flex items-center justify-center p-6">
        <div className="max-w-3xl w-full text-center">
          <div className="mb-6 flex justify-center">
            <Image src="/bgg-logo-black.png" alt="Big Growth Group logo" width={48} height={48} />
          </div>
          <p className="text-sm font-semibold tracking-wide text-indigo-600 uppercase mb-2">
            Your OPSCORE™ Agency Scale Readiness Assessment
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            What’s Actually Holding You Back…
          </h1>       

          <div className="mx-auto max-w-3xl">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-2 shadow-sm">
              <div className="aspect-video relative overflow-hidden rounded-lg bg-black/70 flex items-center justify-center">
                <iframe
                  src="https://fast.wistia.net/embed/iframe/6miebx0b0k"
                  frameBorder={0}
                  className="wistia_embed"
                  name="wistia_embed"
                  width={640}
                  height={360}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
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
      <footer className="h-16 w-full" aria-hidden="true" />
    </>
  );
}
