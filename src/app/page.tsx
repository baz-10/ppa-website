'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function HomePage() {
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
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="Matthew Hodgson"
            fill
            className="object-cover object-[25%_center] lg:object-[20%_center]"
            priority
            quality={90}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/30 lg:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/80 lg:to-white/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 container-wide px-6 lg:px-12 pt-32 pb-20 lg:pt-40 lg:pb-32">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8 animate-fade-in-up animate-on-load" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <div className="gold-line w-12" />
              <span className="font-body text-sm uppercase tracking-widest text-[var(--slate)]">
                Matthew Hodgson
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[var(--charcoal)] mb-6 animate-fade-in-up animate-on-load" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              Clear the path.
            </h1>

            {/* Subheadline */}
            <p className="font-display text-2xl md:text-3xl lg:text-4xl text-[var(--slate)] mb-8 animate-fade-in-up animate-on-load" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              Getting organisations out of their own way.
            </p>

            {/* Gold Line */}
            <div className="gold-line w-24 mb-8 animate-line-expand animate-on-load" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }} />

            {/* Description */}
            <p className="text-lg text-[var(--slate)] mb-10 max-w-lg leading-relaxed animate-fade-in-up animate-on-load" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
              Independent advisor to CEOs. Removing the conditions that cause capable people to misfire, so your organisation can move with clarity and intent.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-on-load" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
              <Link href="/contact" className="btn-primary">
                <span>Book a Conversation</span>
                <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/advisory" className="btn-secondary">
                <span>How I Work</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-fade-in animate-on-load hidden lg:block" style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}>
          <div className="flex flex-col items-center gap-2">
            <span className="font-body text-xs uppercase tracking-widest text-[var(--slate)]">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-[var(--gold)] to-transparent animate-pulse" />
          </div>
        </div>
      </section>

      {/* Meet Matthew Section */}
      <section className="section-padding bg-white">
        <div className="container-wide px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Image */}
            <div className="scroll-animate opacity-0 translate-y-8 order-2 lg:order-1">
              <div className="relative">
                <Image
                  src="/images/matthew-standing.jpg"
                  alt="Matthew Hodgson - CEO Advisor"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Decorative element */}
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[var(--gold)]/10 -z-10" />
              </div>
            </div>

            {/* Right - Content */}
            <div className="scroll-animate opacity-0 translate-y-8 order-1 lg:order-2" style={{ transitionDelay: '0.1s' }}>
              <span className="font-body text-sm uppercase tracking-widest text-[var(--gold)] mb-4 block">
                Meet Matthew
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-[var(--charcoal)] mb-6">
                I help CEOs see what&apos;s really happening.
              </h2>
              <div className="gold-line w-16 mb-8" />
              <p className="text-lg text-[var(--slate)] mb-6 leading-relaxed">
                After a decade as a professional athlete and studying psychology, I learned that performance isn&apos;t just about capability&mdash;it&apos;s about conditions.
              </p>
              <p className="text-lg text-[var(--slate)] mb-8 leading-relaxed">
                Now I work with CEOs to diagnose the hidden dynamics that prevent good people from doing their best work. No programs. No frameworks. Just clarity.
              </p>
              <Link href="/about" className="btn-secondary">
                <span>My Full Story</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="section-padding bg-[var(--cream)]">
        <div className="container-wide px-6 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            {/* Left Column - Image (2 cols) */}
            <div className="scroll-animate opacity-0 translate-y-8 lg:col-span-2 hidden lg:block">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/matthew-listening.jpg"
                  alt="Matthew Hodgson listening"
                  fill
                  className="object-cover"
                  sizes="40vw"
                />
              </div>
            </div>

            {/* Right Column - Content (3 cols) */}
            <div className="lg:col-span-3">
              <div className="scroll-animate opacity-0 translate-y-8 mb-12">
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-[var(--charcoal)] mb-8 leading-tight">
                  Most organisations don&apos;t struggle because people lack capability.
                </h2>
                <p className="text-xl md:text-2xl text-[var(--slate)] font-display italic">
                  They struggle because the environment makes good decisions harder than they should be.
                </p>
              </div>

              <div className="scroll-animate opacity-0 translate-y-8" style={{ transitionDelay: '0.2s' }}>
                <div className="gold-line w-16 mb-8" />
                <p className="text-lg text-[var(--slate)] mb-6 leading-relaxed">
                  When leadership intent stops translating cleanly into behaviour, execution suffers&mdash;even in strong teams.
                </p>
                <p className="text-lg text-[var(--slate)] mb-8 leading-relaxed">
                  I work directly with CEOs to remove the conditions that cause capable people to misfire, so the organisation can move with clarity and intent.
                </p>
                <p className="font-display text-2xl text-[var(--charcoal)]">
                  When the path is clear, behaviour stabilises, and results follow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="section-padding bg-white">
        <div className="container-wide px-6 lg:px-12">
          <div className="text-center mb-16 scroll-animate opacity-0 translate-y-8">
            <span className="font-body text-sm uppercase tracking-widest text-[var(--gold)] mb-4 block">
              The Hidden Cost
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-[var(--charcoal)] mb-6">
              Recognise any of these?
            </h2>
            <div className="gold-line w-16 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Stalled Projects',
                description: 'Misaligned leaders causing missed deadlines and momentum loss',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: 'Disengaged Teams',
                description: 'Ineffective managers creating underperforming environments',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
                title: 'Talent Loss',
                description: 'Top performers leaving, taking revenue, clients, and expertise',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                ),
                title: 'Communication Breakdown',
                description: 'Poor communication creating delays, rework, and frustration',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="scroll-animate opacity-0 translate-y-8 p-8 bg-[var(--cream)] rounded-sm hover:shadow-lg transition-all duration-500 group"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="text-[var(--gold)] mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="font-display text-xl text-[var(--charcoal)] mb-3">
                  {item.title}
                </h3>
                <p className="text-[var(--slate)] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-padding bg-[var(--charcoal)] text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[var(--gold)] blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[var(--gold)] blur-3xl" />
        </div>

        <div className="container-narrow px-6 lg:px-12 relative z-10">
          <div className="text-center scroll-animate opacity-0 translate-y-8">
            {/* Quote Mark */}
            <div className="quote-mark mb-4">&ldquo;</div>

            {/* Quote */}
            <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl text-white/90 mb-10 leading-relaxed">
              Matthew helped me see what was actually driving how we were leading, making decisions, and setting expectations. He cut through a lot of noise and brought clarity to areas that had become unclear. I came to trust him as an advisor to me personally.
            </blockquote>

            {/* Attribution */}
            <div className="gold-line w-16 mx-auto mb-6" />
            <cite className="not-italic">
              <span className="block font-display text-xl text-[var(--gold)]">Dean Adams</span>
              <span className="block text-white/60 text-sm mt-1">CEO, DEJA International</span>
            </cite>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="section-padding bg-white">
        <div className="container-wide px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left - Outcomes */}
            <div className="scroll-animate opacity-0 translate-y-8">
              <span className="font-body text-sm uppercase tracking-widest text-[var(--gold)] mb-4 block">
                Proven Outcomes
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-[var(--charcoal)] mb-8">
                What changes when the path is clear
              </h2>
              <div className="gold-line w-16 mb-8" />

              <ul className="space-y-6">
                {[
                  'Decisions are clearer',
                  'Priorities are aligned',
                  'Behaviour is predictable',
                  'Resistance is reduced',
                  'Capability is fully realised',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-[var(--gold)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg text-[var(--charcoal)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right - Image */}
            <div className="scroll-animate opacity-0 translate-y-8 relative" style={{ transitionDelay: '0.2s' }}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/about.jpg"
                  alt="Matthew Hodgson"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Decorative Frame */}
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[var(--gold)] -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[var(--cream)]">
        <div className="container-narrow px-6 lg:px-12 text-center scroll-animate opacity-0 translate-y-8">
          <span className="font-body text-sm uppercase tracking-widest text-[var(--gold)] mb-4 block">
            Ready to begin?
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-[var(--charcoal)] mb-6">
            Clarity is your greatest advantage.
          </h2>
          <p className="font-display text-2xl text-[var(--slate)] italic mb-10">
            Let&apos;s create it.
          </p>
          <Link href="/contact" className="btn-primary inline-flex">
            <span>Book a Conversation</span>
            <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
