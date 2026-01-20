'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function ContactPage() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - replace with actual form handling
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 lg:pt-40 pb-20 bg-white">
        <div className="container-narrow px-6 lg:px-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-8 animate-fade-in-up animate-on-load" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <div className="gold-line w-12" />
              <span className="font-body text-sm uppercase tracking-widest text-[var(--slate)]">
                Contact
              </span>
              <div className="gold-line w-12" />
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-[var(--charcoal)] mb-8 animate-fade-in-up animate-on-load" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              Clarity starts with a conversation.
            </h1>

            <p className="text-xl text-[var(--slate)] max-w-2xl mx-auto leading-relaxed animate-fade-in-up animate-on-load" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              If something isn&apos;t working the way it should, reach out.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-[var(--cream)]">
        <div className="container-wide px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left - Form */}
            <div className="scroll-animate opacity-0 translate-y-8">
              <span className="font-body text-sm uppercase tracking-widest text-[var(--gold)] mb-4 block">
                Start a Conversation
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-[var(--charcoal)] mb-8">
                Let&apos;s talk
              </h2>
              <div className="gold-line w-16 mb-10" />

              {isSubmitted ? (
                <div className="bg-white p-10 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--gold)]/10 flex items-center justify-center">
                    <svg className="w-8 h-8 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl text-[var(--charcoal)] mb-4">
                    Message Received
                  </h3>
                  <p className="text-[var(--slate)]">
                    Thank you for reaching out. I&apos;ll be in touch within 24-48 hours to schedule our conversation.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="name" className="block font-body text-sm uppercase tracking-wider text-[var(--slate)] mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block font-body text-sm uppercase tracking-wider text-[var(--slate)] mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="company" className="block font-body text-sm uppercase tracking-wider text-[var(--slate)] mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Your organisation"
                      />
                    </div>
                    <div>
                      <label htmlFor="role" className="block font-body text-sm uppercase tracking-wider text-[var(--slate)] mb-2">
                        Role
                      </label>
                      <input
                        type="text"
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Your position"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-body text-sm uppercase tracking-wider text-[var(--slate)] mb-2">
                      What&apos;s on your mind? *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="form-input resize-none"
                      placeholder="Tell me briefly about what's happening in your organisation..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full md:w-auto justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    {!isSubmitting && (
                      <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Right - Contact Info & Image */}
            <div className="scroll-animate opacity-0 translate-y-8" style={{ transitionDelay: '0.2s' }}>
              <div className="relative aspect-[4/3] overflow-hidden mb-10">
                <Image
                  src="/images/contact.jpg"
                  alt="Matthew Hodgson"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="font-body text-sm uppercase tracking-widest text-[var(--gold)] mb-3">
                    Email
                  </h3>
                  <a
                    href="mailto:matthew@peopleperformanceadvisors.com.au"
                    className="text-lg text-[var(--charcoal)] hover:text-[var(--gold)] transition-colors duration-300"
                  >
                    matthew@peopleperformanceadvisors.com.au
                  </a>
                </div>

                <div>
                  <h3 className="font-body text-sm uppercase tracking-widest text-[var(--gold)] mb-3">
                    Phone
                  </h3>
                  <a
                    href="tel:+61401875881"
                    className="text-lg text-[var(--charcoal)] hover:text-[var(--gold)] transition-colors duration-300"
                  >
                    +61 401 875 881
                  </a>
                </div>

                <div>
                  <h3 className="font-body text-sm uppercase tracking-widest text-[var(--gold)] mb-3">
                    Location
                  </h3>
                  <p className="text-lg text-[var(--charcoal)]">
                    Brisbane, QLD Australia
                  </p>
                  <p className="text-[var(--slate)] text-sm mt-2">
                    Available in-person and remotely
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
