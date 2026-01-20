'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function ServicesPage() {
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
                Services
              </span>
              <div className="gold-line w-12" />
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-[var(--charcoal)] mb-8 animate-fade-in-up animate-on-load" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              The Work
            </h1>

            <p className="text-xl text-[var(--slate)] max-w-2xl mx-auto leading-relaxed animate-fade-in-up animate-on-load" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              Removing what interferes with execution.
            </p>
          </div>
        </div>
      </section>

      {/* The How Section */}
      <section className="section-padding bg-[var(--cream)]">
        <div className="container-wide px-6 lg:px-12">
          <div className="text-center mb-16 scroll-animate opacity-0 translate-y-8">
            <span className="font-body text-sm uppercase tracking-widest text-[var(--gold)] mb-4 block">
              The How
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-[var(--charcoal)] mb-6">
              The work usually centres on a few core areas
            </h2>
            <div className="gold-line w-16 mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                ),
                title: 'System',
                description: 'The structural clarity that governs how decisions are made and work moves. When it\'s weak or inconsistent, hesitation and misguided effort follow.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                title: 'Noise',
                description: 'Unfiltered pressure and competing signals that distort otherwise clear systems. Left unattended, they create overload, confusion, and reactive behaviour.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                ),
                title: 'Behaviour',
                description: 'What shows up when people operate inside those conditions. Much of it is shaped by the environment. What remains is individual variance that can be addressed clearly and fairly.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="scroll-animate opacity-0 translate-y-8 group p-8 bg-white"
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

      {/* What To Expect Section */}
      <section className="section-padding bg-white">
        <div className="container-wide px-6 lg:px-12">
          <div className="text-center mb-16 scroll-animate opacity-0 translate-y-8">
            <span className="font-body text-sm uppercase tracking-widest text-[var(--gold)] mb-4 block">
              What To Expect
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-[var(--charcoal)] mb-6">
              These are the changes you can expect when we work together
            </h2>
            <div className="gold-line w-16 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Decisions stick',
              'Priorities settle',
              'Behaviour stabilises',
              'Resistance fades',
              'Capability translates',
              'Results follow intent',
            ].map((outcome, index) => (
              <div
                key={index}
                className="scroll-animate opacity-0 translate-y-8 p-6 bg-[var(--cream)] flex items-center gap-4"
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <svg className="w-6 h-6 text-[var(--gold)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-display text-lg text-[var(--charcoal)]">{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagements Section */}
      <section className="section-padding bg-[var(--cream)]">
        <div className="container-wide px-6 lg:px-12">
          <div className="text-center mb-16 scroll-animate opacity-0 translate-y-8">
            <span className="font-body text-sm uppercase tracking-widest text-[var(--gold)] mb-4 block">
              Engagements
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-[var(--charcoal)] mb-6">
              Ways We Might Work Together
            </h2>
            <div className="gold-line w-16 mx-auto" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Clarity Diagnostic',
                duration: '2-3 weeks',
                description: 'A focused engagement to surface where execution is breaking down and what matters most to address first.',
                features: [
                  'Deep-dive assessment',
                  'Stakeholder interviews',
                  'Priority identification',
                  'Action roadmap',
                ],
                highlighted: false,
              },
              {
                title: 'Organisational Reset',
                duration: '3-4 months',
                description: 'For organisations where misalignment has become embedded and execution needs stabilising.',
                features: [
                  'Comprehensive diagnosis',
                  'Structural realignment',
                  'Leadership calibration',
                  'Sustained implementation',
                ],
                highlighted: true,
              },
              {
                title: 'CEO Structural Advisory',
                duration: 'Ongoing',
                description: 'An independent thinking partner for CEOs seeking clarity under pressure.',
                features: [
                  'Regular advisory sessions',
                  'On-call support',
                  'Strategic sounding board',
                  'Confidential counsel',
                ],
                highlighted: false,
              },
            ].map((service, index) => (
              <div
                key={index}
                className={`scroll-animate opacity-0 translate-y-8 p-8 lg:p-10 transition-all duration-500 ${
                  service.highlighted
                    ? 'bg-[var(--charcoal)] text-white'
                    : 'bg-[var(--cream)]'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className={`font-body text-xs uppercase tracking-widest mb-4 ${
                  service.highlighted ? 'text-[var(--gold)]' : 'text-[var(--gold)]'
                }`}>
                  {service.duration}
                </div>
                <h3 className={`font-display text-2xl lg:text-3xl mb-4 ${
                  service.highlighted ? 'text-white' : 'text-[var(--charcoal)]'
                }`}>
                  {service.title}
                </h3>
                <div className={`gold-line w-12 mb-6`} />
                <p className={`mb-8 leading-relaxed ${
                  service.highlighted ? 'text-white/80' : 'text-[var(--slate)]'
                }`}>
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3">
                      <svg className={`w-5 h-5 flex-shrink-0 ${
                        service.highlighted ? 'text-[var(--gold)]' : 'text-[var(--gold)]'
                      }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`text-sm ${
                        service.highlighted ? 'text-white/70' : 'text-[var(--slate)]'
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-narrow px-6 lg:px-12 text-center scroll-animate opacity-0 translate-y-8">
          <span className="font-body text-sm uppercase tracking-widest text-[var(--gold)] mb-4 block">
            Next Step
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-[var(--charcoal)] mb-10">
            If you want to explore this further, get in touch.
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
