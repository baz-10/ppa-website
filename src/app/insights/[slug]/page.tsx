'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useRef } from 'react';

// Placeholder content - will be replaced with actual articles
const articlesContent: Record<string, { title: string; date: string; content: string[] }> = {
  'when-capability-isnt-the-problem': {
    title: 'When Capability Isn\'t the Problem',
    date: '2026-01-10',
    content: [
      'Most performance issues aren\'t about what people can do. They\'re about what the environment prevents them from doing.',
      'When I work with organisations, I rarely find a lack of talent. What I find instead are conditions that make good decisions harder than they should be.',
      'The capable person who hesitates. The experienced team that second-guesses itself. The leader whose intent never quite lands the way it should.',
      'These aren\'t capability problems. They\'re environmental ones. And they require a different kind of attention.',
    ],
  },
  'the-cost-of-unclear-decisions': {
    title: 'The Cost of Unclear Decisions',
    date: '2025-12-15',
    content: [
      'When decisions don\'t stick, organisations pay twice: once in wasted effort, and again in eroded trust.',
      'The first cost is visible. Projects restart. Priorities shift. Resources get reallocated.',
      'The second cost is harder to see but more damaging. People stop believing that decisions mean anything. They wait instead of act. They hedge instead of commit.',
      'Clear decisions don\'t just save time. They build the trust that makes everything else possible.',
    ],
  },
  'reading-pressure-accurately': {
    title: 'Reading Pressure Accurately',
    date: '2025-11-28',
    content: [
      'Pressure reveals. The question is whether you\'re seeing what it exposes, or just reacting to the discomfort.',
      'Under pressure, organisations show their true operating system. The formal structure fades and the real dynamics emerge.',
      'This is valuable information. It shows you where decisions actually sit, where trust breaks down, and where the system is weaker than it appears.',
      'The goal isn\'t to eliminate pressure. It\'s to read it accurately and use what it reveals.',
    ],
  },
};

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-AU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function InsightArticlePage() {
  const params = useParams();
  const slug = params.slug as string;
  const article = articlesContent[slug];

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

  if (!article) {
    return (
      <section className="pt-32 lg:pt-40 pb-20 bg-white min-h-screen">
        <div className="container-narrow px-6 lg:px-12 text-center">
          <h1 className="font-display text-4xl text-[var(--charcoal)] mb-6">
            Article not found
          </h1>
          <Link href="/insights" className="btn-secondary">
            Back to Insights
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Article Header */}
      <section className="pt-32 lg:pt-40 pb-12 bg-white">
        <div className="container-narrow px-6 lg:px-12">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-[var(--slate)] hover:text-[var(--gold)] transition-colors duration-300 mb-8 animate-fade-in-up animate-on-load"
            style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to Insights
          </Link>

          <time className="font-body text-sm text-[var(--slate)] mb-4 block animate-fade-in-up animate-on-load" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            {formatDate(article.date)}
          </time>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-[var(--charcoal)] mb-8 animate-fade-in-up animate-on-load" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            {article.title}
          </h1>

          <div className="gold-line w-24 animate-fade-in-up animate-on-load" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }} />
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-20 bg-white">
        <div className="container-narrow px-6 lg:px-12">
          <div className="prose prose-lg max-w-none">
            {article.content.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg text-[var(--slate)] leading-relaxed mb-6 scroll-animate opacity-0 translate-y-8"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* More Insights */}
      <section className="section-padding bg-[var(--cream)]">
        <div className="container-narrow px-6 lg:px-12 text-center scroll-animate opacity-0 translate-y-8">
          <span className="font-body text-sm uppercase tracking-widest text-[var(--gold)] mb-4 block">
            Continue Reading
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-[var(--charcoal)] mb-8">
            More Insights
          </h2>
          <Link href="/insights" className="btn-secondary">
            View All Insights
          </Link>
        </div>
      </section>
    </>
  );
}
