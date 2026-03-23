import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on solar business growth, cleantech careers, AI in clean energy, and the energy transition from Tim Montague.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--bg-slate)] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="font-[family-name:var(--font-outfit)] text-4xl md:text-5xl font-bold text-[var(--color-midnight)]">
            Blog
          </h1>
          <p className="mt-4 font-[family-name:var(--font-newsreader)] text-lg text-[var(--color-slate)] max-w-2xl">
            Insights on solar business growth, cleantech careers, AI in clean energy, and the energy transition.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {posts.length === 0 ? (
            <p className="text-[var(--color-mist)]">No posts yet. Check back soon.</p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="group bg-white rounded-xl border border-[var(--bg-slate)] overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
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
                    </div>
                    <h2 className="font-[family-name:var(--font-outfit)] text-xl font-bold text-[var(--color-midnight)] group-hover:text-[var(--color-solar-deep)] transition-colors duration-200 mb-3">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className="font-[family-name:var(--font-newsreader)] text-[var(--color-slate)] line-clamp-3 mb-4">
                      {post.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="inline-block px-2.5 py-0.5 text-xs font-[family-name:var(--font-outfit)] font-medium text-[var(--color-electric-deep)] bg-[var(--bg-cool)] rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-[family-name:var(--font-outfit)] font-semibold text-[var(--color-solar-deep)] hover:text-[var(--color-solar)] transition-colors"
                    >
                      Read more
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--bg-warm)] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-[var(--color-midnight)] mb-4">
            Want Personalized Guidance?
          </h2>
          <p className="font-[family-name:var(--font-newsreader)] text-[var(--color-slate)] mb-6 max-w-xl mx-auto">
            Tim Montague offers one-on-one consulting for cleantech leaders. Book a free strategy call.
          </p>
          <Link
            href="https://calendly.com/tim-montague/coaching_consulting"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-solar-deep)] text-white font-[family-name:var(--font-outfit)] font-semibold rounded-lg hover:bg-[var(--color-solar)] transition-colors"
          >
            Book a Free Strategy Call
          </Link>
        </div>
      </section>
    </>
  );
}
