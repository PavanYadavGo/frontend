import React from 'react';
import { ArrowRight } from 'lucide-react';
import abstractImage from '../../images/Abstract architectural texture with light and shadow.png';

const CTASection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#111827] py-20 md:py-24">

      {/* Background Image */}
      <img
        src={abstractImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 z-0 w-full h-full object-cover opacity-45"
      />

      {/* Warm Overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-br from-[#111827]/95 via-[#5C382F]/80 to-[#A84F38]/75" />

      {/* Decorative Glow */}
      <div className="absolute -top-40 -right-40 z-[2] w-[420px] h-[420px] rounded-full bg-[#f1c888]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-8 text-center">

        {/* Eyebrow */}
        <div className="font-space-mono text-xs md:text-sm text-[#f1c888] uppercase tracking-[0.25em] mb-5">
          Your Next Chapter
        </div>

        {/* Heading */}
        <h2 className="font-fraunces text-4xl md:text-5xl lg:text-6xl text-[#F9F7F2] mb-6 leading-tight">
          Ready to Find Your
          <br />
          <span className="italic text-[#f1c888]">
            Dream Home?
          </span>
        </h2>

        {/* Description */}
        <p className="font-manrope font-light text-base md:text-lg text-[#F9F7F2]/85 mb-10 max-w-[680px] mx-auto leading-relaxed">
          Explore properties, discover new possibilities, and take the next
          step toward finding a place that feels right for you.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 bg-[#f1c888] text-[#111827] font-manrope font-bold text-base px-9 py-4 rounded-xl shadow-[0px_10px_25px_-8px_rgba(0,0,0,0.3)] hover:bg-[#dfb575] hover:-translate-y-0.5 transition-all"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 border border-white/70 text-white font-manrope font-bold text-base px-9 py-4 rounded-xl hover:bg-white hover:text-[#111827] transition-all"
          >
            Schedule a Demo
            <ArrowRight className="w-4 h-4" />
          </button>

        </div>

      </div>
    </section>
  );
};

export default CTASection;