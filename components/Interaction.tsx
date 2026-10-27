'use client';
import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import { addComment, addLike, getComments, getLikes, type Comment } from '@/lib/store';

export default function Interaction({ slug }: { slug: string }) {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [popping, setPopping] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  useEffect(() => {
    getLikes(slug).then((r) => { setLikes(r.count); setLiked(r.liked); });
    getComments(slug).then(setComments);
  }, [slug]);

  const like = async () => {
    if (liked) return;
    setLiked(true);
    setPopping(true);
    setLikes(await addLike(slug, likes));
    setTimeout(() => setPopping(false), 300);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) {
      setMsg({ ok: false, text: 'Please fill in both fields.' });
      return;
    }
    setComments(await addComment(slug, name.trim(), text.trim(), comments));
    setName('');
    setText('');
    setMsg({ ok: true, text: 'Thanks! Your comment has been posted.' });
  };

  const field = 'w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-base focus:border-ink focus:outline-none';

  return (
    <section className="mt-14 max-w-reading border-t border-neutral-200 pt-10">
      <button
        onClick={like}
        aria-pressed={liked}
        disabled={liked}
        className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-2 text-sm hover:bg-surface disabled:cursor-default"
      >
        <Heart className={'h-5 w-5 ' + (popping ? 'pop ' : '') + (liked ? 'fill-ink' : '')} />
        <span>{liked ? 'Liked' : 'Like'} · {likes}</span>
      </button>

      <h2 className="mt-10 text-2xl font-bold">Comments ({comments.length})</h2>
      <form onSubmit={submit} className="mt-6 space-y-4" noValidate>
        <input className={field} placeholder="Your name" aria-label="Your name" value={name} onChange={(e) => setName(e.target.value)} />
        <textarea className={field} rows={4} placeholder="Your comment" aria-label="Your comment" value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit" className="rounded-lg bg-lime px-6 py-3 text-sm font-semibold hover:brightness-95">Post comment</button>
        {msg && <p role="status" className={'text-sm ' + (msg.ok ? 'text-ink' : 'text-red-700')}>{msg.text}</p>}
      </form>

      <ul className="mt-10 space-y-6">
        {comments.map((c) => (
          <li key={c.id} className="rounded-lg bg-surface p-5">
            <p className="font-semibold">{c.author_name}</p>
            <p className="text-xs text-muted">{new Date(c.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
            <p className="mt-2">{c.content}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
