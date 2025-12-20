import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--charcoal)] text-white">
      <div className="container-wide px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Logo & Tagline */}
          <div className="lg:col-span-2">
            <Image
              src="/images/logo.png"
              alt="People Performance Advisors"
              width={200}
              height={55}
              className="h-12 w-auto object-contain brightness-0 invert mb-6"
            />
            <p className="font-display text-2xl text-white/80 mb-6 max-w-md">
              Clear the path. Getting organisations out of their own way.
            </p>
            <div className="gold-line w-16 mb-6" />
            <p className="text-white/60 text-sm">
              Independent advisory for CEOs seeking clarity under pressure.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-body text-sm uppercase tracking-wider text-[var(--gold)] mb-6">
              Navigate
            </h4>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/advisory', label: 'Advisory' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[var(--gold)] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-sm uppercase tracking-wider text-[var(--gold)] mb-6">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:matthew@peopleperformanceadvisors.com.au"
                  className="text-white/70 hover:text-[var(--gold)] transition-colors duration-300 text-sm"
                >
                  matthew@peopleperformanceadvisors.com.au
                </a>
              </li>
              <li>
                <a
                  href="tel:+61401875881"
                  className="text-white/70 hover:text-[var(--gold)] transition-colors duration-300"
                >
                  +61 401 875 881
                </a>
              </li>
              <li className="text-white/50 text-sm pt-2">
                Brisbane, QLD Australia
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            &copy; {currentYear} People Performance Advisors. All rights reserved.
          </p>
          <p className="text-white/40 text-sm">
            Matthew Hodgson &middot; Independent Advisor to CEOs
          </p>
        </div>
      </div>
    </footer>
  );
}
