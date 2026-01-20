'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function AboutPage() {
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
        <div className="container-wide px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left - Content */}
            <div>
              <div className="flex items-center gap-3 mb-8 animate-fade-in-up animate-on-load" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                <div className="gold-line w-12" />
                <span className="font-body text-sm uppercase tracking-widest text-[var(--slate)]">
                  About
                </span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-[var(--charcoal)] mb-8 animate-fade-in-up animate-on-load" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                Matthew Hodgson &ndash; Independent Advisor
              </h1>

              <div className="gold-line w-24 mb-8 animate-line-expand animate-on-load" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }} />

              <p className="text-lg text-[var(--slate)] leading-relaxed animate-fade-in-up animate-on-load" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
                This page outlines how I think about organisations, and how that thinking translates into the work.
              </p>
            </div>

            {/* Right - Image */}
            <div className="relative animate-fade-in-up animate-on-load" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/about.jpg"
                  alt="Matthew Hodgson"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              {/* Decorative Frame */}
              <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-[var(--gold)] -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-[var(--cream)]">
        <div className="container-narrow px-6 lg:px-12">
          <div className="scroll-animate opacity-0 translate-y-8">
            <span className="font-body text-sm uppercase tracking-widest text-[var(--gold)] mb-4 block">
              My Philosophy
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-[var(--charcoal)] mb-8">
              That combination shaped how I see organisations.
            </h2>
            <div className="gold-line w-16 mb-10" />
          </div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            <div className="scroll-animate opacity-0 translate-y-8">
              <p className="text-xl text-[var(--charcoal)] font-display leading-relaxed mb-6">
                Start with reality.
              </p>
              <p className="text-lg text-[var(--slate)] leading-relaxed">
                Progress begins with seeing the organisation as it is, not as it&apos;s described or intended.
              </p>
            </div>

            <div className="scroll-animate opacity-0 translate-y-8" style={{ transitionDelay: '0.1s' }}>
              <p className="text-xl text-[var(--charcoal)] font-display leading-relaxed mb-6">
                Read pressure accurately.
              </p>
              <p className="text-lg text-[var(--slate)] leading-relaxed">
                Pressure exposes weaknesses and distorts behaviour. Treated properly, it becomes useful information rather than unwanted interference.
              </p>
            </div>

            <div className="scroll-animate opacity-0 translate-y-8" style={{ transitionDelay: '0.2s' }}>
              <p className="text-xl text-[var(--charcoal)] font-display leading-relaxed mb-6">
                See through the noise.
              </p>
              <p className="text-lg text-[var(--slate)] leading-relaxed">
                Excellence requires sustained focus. Focus is built upon being able to decipher what is important from what isn&apos;t.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Background Section */}
      <section className="section-padding bg-white">
        <div className="container-wide px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left - Athletic Image */}
            <div className="scroll-animate opacity-0 translate-y-8 order-2 lg:order-1">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/images/athletic.jpg"
                  alt="Matthew Hodgson - Athletic Background"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className="scroll-animate opacity-0 translate-y-8 order-1 lg:order-2" style={{ transitionDelay: '0.1s' }}>
              <span className="font-body text-sm uppercase tracking-widest text-[var(--gold)] mb-4 block">
                Background
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-[var(--charcoal)] mb-8">
                A Different Lens
              </h2>
              <div className="gold-line w-16 mb-8" />

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-[var(--cream)] text-[var(--gold)] flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-[var(--charcoal)] mb-2">Professional Sport</h3>
                    <p className="text-[var(--slate)]">Over a decade inside elite teams where pressure exposed what actually drives success and failure.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-[var(--cream)] text-[var(--gold)] flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-[var(--charcoal)] mb-2">Formal Psychology Education</h3>
                    <p className="text-[var(--slate)]">Deep understanding of what drives behaviour and decision-making.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-[var(--cream)] text-[var(--gold)] flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-[var(--charcoal)] mb-2">Applied Organisational Work</h3>
                    <p className="text-[var(--slate)]">Experience working inside organisations where decisions have real consequences.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="section-padding bg-[var(--charcoal)] text-white">
        <div className="container-narrow px-6 lg:px-12 text-center">
          <div className="scroll-animate opacity-0 translate-y-8">
            <span className="font-body text-sm uppercase tracking-widest text-[var(--gold)] mb-4 block">
              My Approach
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-10 leading-tight">
              See what&apos;s real. Say what matters. Remove what doesn&apos;t.
            </h2>
            <div className="gold-line w-16 mx-auto mb-10" />
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              I work from what&apos;s actually happening, not what&apos;s claimed. I pay attention to where pressure distorts judgment and where noise replaces signal. The work changes, but the lens doesn&apos;t. From this, clarity follows. And the right actions become obvious.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-narrow px-6 lg:px-12 text-center scroll-animate opacity-0 translate-y-8">
          <span className="font-body text-sm uppercase tracking-widest text-[var(--gold)] mb-4 block">
            Enquire
          </span>
          <p className="text-lg text-[var(--slate)] mb-10 max-w-xl mx-auto">
            If something isn&apos;t working the way it should, let&apos;s talk.
          </p>
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
