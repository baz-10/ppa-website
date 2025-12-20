'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function AdvisoryPage() {
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
                Advisory
              </span>
              <div className="gold-line w-12" />
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-[var(--charcoal)] mb-8 animate-fade-in-up animate-on-load" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              How I Work
            </h1>

            <p className="text-xl text-[var(--slate)] max-w-2xl mx-auto leading-relaxed animate-fade-in-up animate-on-load" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              My role is to help leadership see what is actually driving outcomes&mdash;and what&apos;s interfering with them.
            </p>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="section-padding bg-[var(--cream)]">
        <div className="container-wide px-6 lg:px-12">
          <div className="text-center mb-16 scroll-animate opacity-0 translate-y-8">
            <span className="font-body text-sm uppercase tracking-widest text-[var(--gold)] mb-4 block">
              The Work
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-[var(--charcoal)] mb-6">
              That usually means
            </h2>
            <div className="gold-line w-16 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: '01',
                title: 'Clarifying where decisions really sit',
                description: 'Uncovering the true decision-making dynamics that shape outcomes.',
              },
              {
                number: '02',
                title: 'Identifying conflicting signals',
                description: 'Finding the pressure points that create confusion and misalignment.',
              },
              {
                number: '03',
                title: 'Removing barriers',
                description: 'Eliminating what distorts execution and prevents clean action.',
              },
              {
                number: '04',
                title: 'Restoring operational rhythm',
                description: 'Re-establishing the cadence that allows organisations to move with intent.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="scroll-animate opacity-0 translate-y-8 group"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="text-6xl font-display text-[var(--gold)]/20 mb-4 group-hover:text-[var(--gold)]/40 transition-colors duration-300">
                  {item.number}
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

      {/* Services Section */}
      <section className="section-padding bg-white">
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

      {/* Outcomes Section */}
      <section className="section-padding bg-[var(--charcoal)] text-white">
        <div className="container-wide px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="scroll-animate opacity-0 translate-y-8">
              <span className="font-body text-sm uppercase tracking-widest text-[var(--gold)] mb-4 block">
                What to Expect
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-8">
                The outcomes that follow clarity
              </h2>
              <div className="gold-line w-16 mb-8" />
              <p className="text-lg text-white/70 leading-relaxed">
                When the path is clear, behaviour stabilises, and results follow. These are the changes you can expect when we work together.
              </p>
            </div>

            <div className="scroll-animate opacity-0 translate-y-8 grid grid-cols-2 gap-6" style={{ transitionDelay: '0.2s' }}>
              {[
                { label: 'Decisions are clearer', icon: '01' },
                { label: 'Priorities are aligned', icon: '02' },
                { label: 'Behaviour is predictable', icon: '03' },
                { label: 'Resistance is reduced', icon: '04' },
                { label: 'Capability is fully realised', icon: '05' },
                { label: 'Results follow intent', icon: '06' },
              ].map((outcome, index) => (
                <div
                  key={index}
                  className="p-6 bg-white/5 hover:bg-white/10 transition-colors duration-300"
                >
                  <div className="text-3xl font-display text-[var(--gold)]/30 mb-2">
                    {outcome.icon}
                  </div>
                  <p className="text-white/90 font-display text-lg">
                    {outcome.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[var(--cream)]">
        <div className="container-narrow px-6 lg:px-12 text-center scroll-animate opacity-0 translate-y-8">
          <span className="font-body text-sm uppercase tracking-widest text-[var(--gold)] mb-4 block">
            Start Here
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-[var(--charcoal)] mb-6">
            Clarity starts with a conversation.
          </h2>
          <p className="text-lg text-[var(--slate)] mb-10 max-w-xl mx-auto">
            If something isn&apos;t working the way it should, reach out. No pitch, no pressure&mdash;just an honest conversation about what&apos;s happening.
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
