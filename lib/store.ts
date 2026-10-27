import { createClient } from '@supabase/supabase-js';

export type Comment = { id: string | number; author_name: string; content: string; created_at: string };

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = url && key ? createClient(url, key) : null;

const SEED_COMMENTS: Comment[] = [
  { id: 's1', author_name: 'Marta', content: 'I loved this! I never think about how many versions a poster goes through.', created_at: '2026-10-01T10:00:00Z' },
  { id: 's2', author_name: 'Daniel', content: 'Great post. Simple advice, but I really needed to hear it.', created_at: '2026-10-02T15:30:00Z' },
];

function read<T>(k: string, fallback: T): T {
  try { const v = localStorage.getItem(k); return v ? (JSON.parse(v) as T) : fallback; } catch { return fallback; }
}
function write(k: string, v: unknown) {
  try { localStorage.setItem(k, JSON.stringify(v)); } catch {}
}

export async function getLikes(slug: string): Promise<{ count: number; liked: boolean }> {
  const liked = read<boolean>('liked:' + slug, false);
  if (supabase) {
    const { data } = await supabase.from('likes').select('count').eq('post_slug', slug).maybeSingle();
    return { count: data?.count ?? 0, liked };
  }
  return { count: read<number>('likes:' + slug, 5), liked };
}

export async function addLike(slug: string, current: number): Promise<number> {
  const next = current + 1;
  write('liked:' + slug, true);
  if (supabase) {
    await supabase.from('likes').upsert({ post_slug: slug, count: next }, { onConflict: 'post_slug' });
  } else {
    write('likes:' + slug, next);
  }
  return next;
}

export async function getComments(slug: string): Promise<Comment[]> {
  if (supabase) {
    const { data } = await supabase.from('comments').select('*').eq('post_slug', slug).order('created_at', { ascending: false });
    return (data as Comment[]) ?? [];
  }
  return read<Comment[]>('comments:' + slug, SEED_COMMENTS);
}

export async function addComment(slug: string, author_name: string, content: string, existing: Comment[]): Promise<Comment[]> {
  if (supabase) {
    await supabase.from('comments').insert({ post_slug: slug, author_name, content });
    return getComments(slug);
  }
  const c: Comment = { id: Date.now(), author_name, content, created_at: new Date().toISOString() };
  const next = [c, ...existing];
  write('comments:' + slug, next);
  return next;
}
