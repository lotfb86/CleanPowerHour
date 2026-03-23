import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";
import { remark } from "remark";
import html from "remark-html";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const processedContent = await remark().use(html).process(post.content);
  const contentHtml = processedContent.toString();

  return (
    <>
      {/* Article Header */}
      <section className="bg-[var(--bg-slate)] py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm font-[family-name:var(--font-outfit)] text-[var(--color-mist)] hover:text-[var(--color-solar-deep)] mb-6 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to Blog
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <time
              dateTime={post.date}
              className="text-sm font-[family-name:var(--font-outfit)] text-[var(--color-mist)]"
            >
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span className="text-[var(--color-mist)]">·</span>
            <span className="text-sm font-[family-name:var(--font-outfit)] text-[var(--color-mist)]">
              {post.author}
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-outfit)] text-3xl md:text-4xl font-bold text-[var(--color-midnight)] leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block px-3 py-1 text-xs font-[family-name:var(--font-outfit)] font-medium text-[var(--color-electric-deep)] bg-[var(--bg-cool)] rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <article
            className="font-[family-name:var(--font-newsreader)] text-lg text-[var(--color-charcoal)] leading-relaxed prose prose-lg max-w-none
              [&_h2]:font-[family-name:var(--font-outfit)] [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-[var(--color-midnight)] [&_h2]:mt-12 [&_h2]:mb-4
              [&_h3]:font-[family-name:var(--font-outfit)] [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-[var(--color-midnight)] [&_h3]:mt-8 [&_h3]:mb-3
              [&_p]:mb-6
              [&_ul]:mb-6 [&_ul]:ml-6 [&_ul]:list-disc
              [&_li]:mb-2
              [&_a]:text-[var(--color-electric-deep)] [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-[var(--color-solar-deep)]
              [&_strong]:text-[var(--color-midnight)]
              [&_blockquote]:border-l-4 [&_blockquote]:border-[var(--color-solar)] [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:text-[var(--color-slate)]"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      </section>

      {/* Author Card + CTA */}
      <section className="bg-[var(--bg-warm)] py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[var(--bg-slate)]">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="shrink-0">
                <div className="w-16 h-16 rounded-full bg-[var(--bg-dark)] flex items-center justify-center">
                  <span className="text-xl font-[family-name:var(--font-outfit)] font-bold text-white">TM</span>
                </div>
              </div>
              <div>
                <p className="font-[family-name:var(--font-outfit)] font-bold text-[var(--color-midnight)]">
                  Tim Montague, M.S.
                </p>
                <p className="text-sm font-[family-name:var(--font-outfit)] text-[var(--color-mist)] mb-3">
                  President & Founder, Clean Power Consulting Group
                </p>
                <p className="font-[family-name:var(--font-newsreader)] text-[var(--color-slate)] text-sm mb-4">
                  30+ years in technology and sustainability. NABCEP PV Technical Sales Certified, WSI Certified AI Business Consultant. Host of the Clean Power Hour podcast.
                </p>
                <Link
                  href="https://calendly.com/tim-montague/coaching_consulting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-solar-deep)] text-white text-sm font-[family-name:var(--font-outfit)] font-semibold rounded-lg hover:bg-[var(--color-solar)] transition-colors"
                >
                  Book a Free Strategy Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
