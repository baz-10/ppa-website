'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

// Placeholder articles - will be replaced with actual content
const articles = [
  {
    slug: 'when-capability-isnt-the-problem',
    title: 'When Capability Isn\'t the Problem',
    date: '2026-01-10',
    excerpt: 'Most performance issues aren\'t about what people can do. They\'re about what the environment prevents them from doing.',
  },
  {
    slug: 'the-cost-of-unclear-decisions',
    title: 'The Cost of Unclear Decisions',
    date: '2025-12-15',
    excerpt: 'When decisions don\'t stick, organisations pay twice: once in wasted effort, and again in eroded trust.',
  },
  {
    slug: 'reading-pressure-accurately',
    title: 'Reading Pressure Accurately',
    date: '2025-11-28',
    excerpt: 'Pressure reveals. The question is whether you\'re seeing what it exposes, or just reacting to the discomfort.',
  },
];

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-AU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function InsightsPage() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.scroll-animate').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 lg:pt-40 pb-20 bg-white">
        <div className="container-narrow px-6 lg:px-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-8 animate-fade-in-up animate-on-load" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <div className="gold-line w-12" />
              <span className="font-body text-sm uppercase tracking-widest text-[var(--slate)]">
                Insights
              </span>
              <div className="gold-line w-12" />
            </div>

            <p className="text-xl text-[var(--slate)] max-w-2xl mx-auto leading-relaxed animate-fade-in-up animate-on-load" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              Short pieces on what actually shapes organisational execution.
            </p>
          </div>
        </div>
      </section>

      {/* Articles List */}
      <section className="section-padding bg-[var(--cream)]">
        <div className="container-narrow px-6 lg:px-12">
          <div className="space-y-12">
            {articles.map((article, index) => (
              <article
                key={article.slug}
                className="scroll-animate opacity-0 translate-y-8 border-b border-[var(--charcoal)]/10 pb-12 last:border-b-0"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <Link href={`/insights/${article.slug}`} className="block group">
                  <time className="font-body text-sm text-[var(--slate)] mb-3 block">
                    {formatDate(article.date)}
                  </time>
                  <h2 className="font-display text-2xl md:text-3xl text-[var(--charcoal)] mb-4 group-hover:text-[var(--gold)] transition-colors duration-300">
                    {article.title}
                  </h2>
                  {article.excerpt && (
                    <p className="text-[var(--slate)] leading-relaxed max-w-2xl">
                      {article.excerpt}
                    </p>
                  )}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-narrow px-6 lg:px-12 text-center scroll-animate opacity-0 translate-y-8">
          <span className="font-body text-sm uppercase tracking-widest text-[var(--gold)] mb-4 block">
            Get in Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-[var(--charcoal)] mb-6">
            Want to discuss something specific?
          </h2>
          <Link href="/contact" className="btn-primary inline-flex">
            <span>Start a Conversation</span>
            <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
