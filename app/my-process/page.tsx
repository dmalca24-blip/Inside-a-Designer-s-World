import ArticleHeader from '@/components/ArticleHeader';
import Figure from '@/components/Figure';
import Interaction from '@/components/Interaction';
import { IMAGES } from '@/lib/site';

export const metadata = { title: "My Process — Inside a Designer's World" };

export default function MyProcess() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <article>
        <ArticleHeader title="What People Don’t See Behind a Design" tag="My Process" />
        <div className="prose-body">
          <p>People usually see the final design: a poster, a social media post, or a photograph. What they don&apos;t see is everything that happens before that moment. For me, designing means testing ideas, making mistakes, and trying again.</p>
          <p>I often begin with a simple question: What do I want people to feel or understand? After that, I look for references, choose a few colors, and decide which information is most important. Sometimes I like my first idea. Sometimes I realize it doesn&apos;t work at all.</p>
          <Figure src={IMAGES.sketch.src} alt={IMAGES.sketch.alt} caption="A design usually changes many times before it is finished." />
          <p>One of the hardest parts is knowing when to stop. I can spend a lot of time moving a title a little to the left or changing a font. Small details matter, but a design also needs to be clear. If people can&apos;t understand the message, the decoration won&apos;t help.</p>
          <p>I&apos;ve learned that good design isn&apos;t only about using Photoshop or having an expensive computer. It&apos;s also about paying attention, listening to feedback, and being patient. Every new project teaches me something different.</p>
          <p>So, the next time you see a poster you like, think about the decisions behind it. There is probably more work there than you imagine.</p>
          <p className="font-semibold italic">What part of the design process would you like to try?</p>
        </div>
      </article>
      <Interaction slug="my-process" />
    </main>
  );
}
