import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Figure from '@/components/Figure';
import { AUTHOR, IMAGES } from '@/lib/site';

const posts = [
  { href: '/my-process', tag: 'My Process', title: 'What People Don’t See Behind a Design', text: 'Testing ideas, making mistakes, and trying again.', img: IMAGES.sketch },
  { href: '/design-tips', tag: 'Design Tips', title: 'Five Small Things That Make a Design Better', text: 'Five simple habits for clearer work.', img: IMAGES.poster },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6">
      <section className="py-20 md:py-28">
        <h1 className="max-w-3xl text-5xl font-bold leading-[1.1] md:text-7xl">It looks simple. It never starts that way.</h1>
        <p className="mt-6 text-xl text-muted">Ideas, revisions and everything behind a design.</p>
        <Link href="/my-process" className="mt-10 inline-flex items-center gap-2 rounded-lg bg-lime px-7 py-4 text-sm font-bold tracking-widest hover:brightness-95">
          READ MY STORY <ArrowRight className="h-4 w-4" />
        </Link>
        <p className="mt-14 max-w-reading text-lg">
          Hi, I&apos;m {AUTHOR}. Welcome to Inside a Designer&apos;s World, a place to talk about the work that happens before a design is finished. Here, I share small lessons from making posters, editing photos, and creating content for digital platforms. Sometimes an idea works on the first try. Other times, I change the colors or move the text ten times. That&apos;s normal, and that&apos;s what makes the process interesting. If you like design, or you&apos;re curious about how it works, you&apos;re in the right place. Take a look at my posts and tell me what you think!
        </p>
      </section>

      <section aria-labelledby="featured">
        <h2 id="featured" className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-muted">Featured posts</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((p) => (
            <Link key={p.href} href={p.href} className="group block rounded-lg border border-neutral-200 bg-surface p-4 transition hover:border-ink">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.img.src} alt={p.img.alt} loading="lazy" className="aspect-[16/10] w-full rounded-lg object-cover" />
              <span className="mt-5 inline-block rounded bg-lime px-3 py-1 text-xs font-semibold uppercase tracking-wider">{p.tag}</span>
              <h3 className="mt-3 text-2xl font-bold group-hover:underline">{p.title}</h3>
              <p className="mt-2 text-muted">{p.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <div className="mt-20">
        <Figure src={IMAGES.desk.src} alt={IMAGES.desk.alt} caption="My workspace: where most of the ideas (and most of the mistakes) happen." />
      </div>
    </main>
  );
}
