import { AUTHOR } from '@/lib/site';

export default function ArticleHeader({ title, tag }: { title: string; tag: string }) {
  return (
    <header className="mb-10">
      <span className="inline-block rounded bg-lime px-3 py-1 text-xs font-semibold uppercase tracking-wider">{tag}</span>
      <h1 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">{title}</h1>
      <p className="mt-4 text-sm text-muted">By: {AUTHOR} · about 2 min</p>
    </header>
  );
}
