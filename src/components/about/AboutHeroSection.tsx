import React from 'react';
import mainAboutImage from '../../images/Main about image.jpg';

const AboutHeroSection: React.FC = () => {
  return (
    <section className="relative h-[480px] overflow-hidden bg-[#111827]">

      {/* Background Image */}
      <img
        src={mainAboutImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-45"
      />

      {/* Warm Brand Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#111827]/95 via-[#8B6F47]/80 to-[#A84F38]/70" />

      {/* Subtle Darkening */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Decorative Glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#f1c888]/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center max-w-[760px] px-8">

          {/* Eyebrow */}
          <div className="font-space-mono text-sm text-[#f1c888] uppercase tracking-[0.25em] mb-6">
            About FoundationX
          </div>

          {/* Heading */}
          <h1 className="font-fraunces text-[48px] md:text-[56px] leading-[1.1] text-[#F9F7F2] mb-7">
            A Better Way to
            <br />
            <span className="italic text-[#f1c888]">
              Find Your Place
            </span>
          </h1>

          {/* Divider */}
          <div className="w-24 h-px bg-[#f1c888]/60 mx-auto mb-7" />

          {/* Description */}
          <p className="font-manrope font-light text-lg md:text-xl text-[#F9F7F2]/85 tracking-wide max-w-[650px] mx-auto leading-relaxed">
            Bringing property discovery, market information, and a simpler
            search experience together in one place.
          </p>

        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;