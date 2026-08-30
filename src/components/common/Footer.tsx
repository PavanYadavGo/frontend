import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
} from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) return;

    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="bg-[#111827] text-white">

      {/* Main Footer */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 py-16 md:py-20">

        {/* Top Brand Statement */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-14 mb-14 border-b border-white/10">

          <div className="max-w-[680px]">
            <div className="flex items-center gap-3 mb-6">
              <Link to="/" className="flex items-center gap-3 group">
                <img
                  src="/logo.png"
                  alt="FoundationX"
                  className="h-10 w-auto brightness-0 invert"
                />

                <span className="font-fraunces text-2xl font-bold tracking-tight">
                  FoundationX
                </span>
              </Link>
            </div>

            <h2 className="font-fraunces text-3xl md:text-4xl leading-tight text-white mb-4">
              Find a place that feels like home.
            </h2>

            <p className="font-manrope font-light text-[#9ca3af] text-sm md:text-base leading-relaxed max-w-[600px]">
              Explore properties, compare your options, and discover homes
              that fit your needs — all in one place.
            </p>
          </div>

          <Link
            to="/properties"
            className="inline-flex items-center gap-2 self-start lg:self-auto bg-[#f1c888] hover:bg-[#dfb575] text-[#111827] font-manrope font-bold text-sm px-6 py-3.5 rounded-lg transition-all hover:-translate-y-0.5"
          >
            Explore Properties
            <ArrowUpRight className="w-4 h-4" />
          </Link>

        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">

          {/* Brand / Social */}
          <div>
            <h4 className="font-syne font-bold text-white text-lg mb-6">
              Connect
            </h4>

            <p className="font-manrope font-light text-[#9ca3af] text-sm leading-relaxed mb-6">
              Follow FoundationX | XBR for property updates, new listings,
              and what's happening in the real estate space.
            </p>

            <div className="flex flex-wrap gap-3">

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 bg-white/5 hover:bg-[#f1c888] border border-white/10 rounded-lg flex items-center justify-center transition-all group"
              >
                <Facebook className="w-4 h-4 text-[#9ca3af] group-hover:text-[#111827] transition-colors" />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 bg-white/5 hover:bg-[#f1c888] border border-white/10 rounded-lg flex items-center justify-center transition-all group"
              >
                <Twitter className="w-4 h-4 text-[#9ca3af] group-hover:text-[#111827] transition-colors" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 bg-white/5 hover:bg-[#f1c888] border border-white/10 rounded-lg flex items-center justify-center transition-all group"
              >
                <Instagram className="w-4 h-4 text-[#9ca3af] group-hover:text-[#111827] transition-colors" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 bg-white/5 hover:bg-[#f1c888] border border-white/10 rounded-lg flex items-center justify-center transition-all group"
              >
                <Linkedin className="w-4 h-4 text-[#9ca3af] group-hover:text-[#111827] transition-colors" />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 bg-white/5 hover:bg-[#f1c888] border border-white/10 rounded-lg flex items-center justify-center transition-all group"
              >
                <Youtube className="w-4 h-4 text-[#9ca3af] group-hover:text-[#111827] transition-colors" />
              </a>

            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-syne font-bold text-white text-lg mb-6">
              Explore
            </h4>

            <ul className="space-y-4">

              <li>
                <Link
                  to="/properties"
                  className="font-manrope font-light text-[#9ca3af] text-sm hover:text-white transition-colors"
                >
                  Browse Properties
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="font-manrope font-light text-[#9ca3af] text-sm hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="font-manrope font-light text-[#9ca3af] text-sm hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  to="/signup"
                  className="font-manrope font-light text-[#9ca3af] text-sm hover:text-white transition-colors"
                >
                  Get Started
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-syne font-bold text-white text-lg mb-6">
              Contact
            </h4>

            <ul className="space-y-5">

              <li>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 font-manrope font-light text-[#9ca3af] text-sm hover:text-white transition-colors"
                >
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#f1c888]" />

                  <span className="leading-relaxed">
                    Pinnacle Business Park,
                    <br />
                    We Work, 2nd Floor,
                    <br />
                    Andheri, Mumbai,
                    <br />
                    Maharashtra 400093
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="tel:+918879240162"
                  className="flex items-center gap-3 font-manrope font-light text-[#9ca3af] text-sm hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 text-[#f1c888]" />
                  <span>+91 8879240162</span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:foundationx.abr@gmail.com"
                  className="flex items-center gap-3 font-manrope font-light text-[#9ca3af] text-sm hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 text-[#f1c888]" />
                  <span className="break-all">
                    foundationx.abr@gmail.com
                  </span>
                </a>
              </li>

            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-syne font-bold text-white text-lg mb-6">
              Stay Updated
            </h4>

            <p className="font-manrope font-light text-[#9ca3af] text-sm mb-5 leading-relaxed">
              Get updates on new properties and useful real estate
              information delivered to your inbox.
            </p>

            <form
              onSubmit={handleNewsletterSubmit}
              className="space-y-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                aria-label="Email address"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 font-manrope font-light text-sm text-white placeholder:text-[#6b7280] focus:outline-none focus:border-[#f1c888] transition-colors"
                required
              />

              <button
                type="submit"
                className="w-full bg-[#f1c888] hover:bg-[#dfb575] text-[#111827] font-manrope font-bold text-sm px-4 py-3.5 rounded-lg transition-all"
              >
                Subscribe
              </button>
            </form>

            <p className="font-manrope font-light text-[#6b7280] text-xs mt-3">
              No spam. Unsubscribe whenever you want.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-14 pt-8">

          <div className="flex flex-col md:flex-row justify-between items-center gap-5">

            <p className="font-manrope font-light text-[#6b7280] text-xs md:text-sm text-center md:text-left">
              © 2026 FoundationX | XBR. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">

              <Link
                to="/privacy"
                className="font-manrope font-light text-[#6b7280] text-xs md:text-sm hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="font-manrope font-light text-[#6b7280] text-xs md:text-sm hover:text-white transition-colors"
              >
                Terms of Service
              </Link>

              <Link
                to="/cookies"
                className="font-manrope font-light text-[#6b7280] text-xs md:text-sm hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;