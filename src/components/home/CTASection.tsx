import React from 'react';
import { Link } from 'react-router-dom';
import abstractImage from '../../images/prop/Abstract.png';

const CTASection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#A84F38] py-24">

      {/* Background Image */}
      <img
        src={abstractImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-60 pointer-events-none"
      />

      {/* Soft Overlay */}
      <div className="absolute inset-0 z-[1] bg-[#7F3A2B]/35 pointer-events-none" />

      {/* Decorative Glow */}
      <div className="absolute -top-32 -left-32 z-[2] h-96 w-96 rounded-full bg-[#f1c888]/10 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1280px] px-8 text-center">

        <h2 className="font-fraunces text-5xl text-white mb-6">
          Ready to Find Your Dream Home?
        </h2>

        <p className="font-manrope font-light text-xl text-white/90 mb-10 max-w-[680px] mx-auto leading-relaxed">
          Discover properties that match your needs and take the next step
          toward finding a place you'll love to call home.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <Link
            to="/signup"
            className="bg-white text-[#8F4532] font-manrope font-bold text-lg px-10 py-4 rounded-xl shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.15)] hover:shadow-2xl hover:-translate-y-0.5 transition-all inline-block"
          >
            Get Started
          </Link>

          <Link
            to="/contact"
            className="border-2 border-white text-white font-manrope font-bold text-lg px-10 py-4 rounded-xl hover:bg-white hover:text-[#8F4532] transition-all inline-block"
          >
            Schedule a Demo
          </Link>

        </div>
      </div>
    </section>
  );
};

export default CTASection;