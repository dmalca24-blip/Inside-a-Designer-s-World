import ArticleHeader from '@/components/ArticleHeader';
import Figure from '@/components/Figure';
import Interaction from '@/components/Interaction';
import { IMAGES, YOUTUBE_ID } from '@/lib/site';

export const metadata = { title: "Design Tips — Inside a Designer's World" };

const tips = [
  ['Start with the message.', 'Before choosing colors or photos, decide what people need to know.'],
  ['Use fewer fonts.', 'Two typefaces are usually enough. Too many styles can make a poster confusing.'],
  ['Give your text some space.', 'Not every corner needs an image or a decoration. White space makes important information easier to see.'],
  ['Check your colors.', "Choose a simple palette and make sure the text is easy to read. A beautiful background doesn't help if the words disappear."],
  ['Ask for another opinion.', "After looking at the same design for hours, it's easy to miss something. A friend can notice details that you didn't see."],
];

export default function DesignTips() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <article>
        <ArticleHeader title="Five Small Things That Make a Design Better" tag="Design Tips" />
        <div className="prose-body">
          <p>When I started paying more attention to graphic design, I thought a good design needed many effects. Now I prefer to keep things simple. Here are five small habits that help me create clearer work.</p>
          <ol className="mb-6 space-y-4 text-lg">
            {tips.map(([t, d], i) => (
              <li key={t} className="flex gap-4">
                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-lime text-sm font-bold">{i + 1}</span>
                <span><strong>{t}</strong> {d}</span>
              </li>
            ))}
          </ol>
          <Figure src={IMAGES.palette.src} alt={IMAGES.palette.alt} caption="A simple setup is often all you need to start." />
          <p>For my projects, I use digital tools to edit photographs and organize visual ideas, but no app can replace practice. I still make mistakes, and that&apos;s fine. The important thing is to keep learning.</p>
        </div>

        <figure className="my-10 max-w-reading">
          <div className="aspect-video overflow-hidden rounded-lg border border-neutral-200">
            <iframe
              className="h-full w-full"
              src={'https://www.youtube.com/embed/' + YOUTUBE_ID}
              title="Small design decisions video"
              allow="encrypted-media; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <figcaption className="mt-3 text-sm text-muted">Here is a short video showing how small design decisions can improve a simple visual.</figcaption>
        </figure>

        <p className="prose-body text-lg font-semibold italic">Which tip do you think is the most useful? Leave your answer in the comments.</p>
      </article>
      <Interaction slug="design-tips" />
    </main>
  );
}
