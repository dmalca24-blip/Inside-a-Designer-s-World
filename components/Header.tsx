'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/my-process', label: 'My Process' },
  { href: '/design-tips', label: 'Design Tips' },
];

export default function Header() {
  const path = (usePathname() || '/').replace(/\/$/, '') || '/';
  return (
    <header className="border-b border-neutral-200">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-5">
        <Link href="/" className="text-sm font-bold tracking-[0.2em]">A DESIGNER&apos;S WORLD</Link>
        <nav className="flex gap-6 text-sm">
          {links.map((l) => {
            const active = path === l.href;
            return (
              <Link key={l.href} href={l.href} aria-current={active ? 'page' : undefined}
                className={'border-b-2 pb-1 ' + (active ? 'border-lime font-semibold text-ink' : 'border-transparent text-muted hover:text-ink')}>
                {l.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
