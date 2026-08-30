import React from 'react';
import { ArrowRight } from 'lucide-react';
import heritageImage from '../../images/Heritage section.jpg';

const AboutHeritageSection: React.FC = () => {
  return (
    <section className="bg-[#F9F7F2] py-20 md:py-24">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left - Image */}
          <div className="relative">

            {/* Decorative Frame */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-[#f1c888] rounded-tl-2xl opacity-70" />

            <div className="relative border border-[#D4755B]/25 rounded-2xl p-3 bg-white shadow-[0px_20px_45px_-15px_rgba(17,24,39,0.15)]">

              <div className="relative h-[520px] md:h-[650px] rounded-xl overflow-hidden">

                <img
                  src={heritageImage}
                  alt="Architectural detail representing thoughtful living spaces"
                  className="w-full h-full object-cover"
                />

                {/* Subtle Warm Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/20 via-transparent to-[#f1c888]/5 pointer-events-none" />

              </div>
            </div>

            {/* Floating Label */}
            <div className="absolute -bottom-5 -right-4 md:-right-6 bg-[#111827] text-white rounded-xl px-6 py-4 shadow-[0px_15px_30px_-10px_rgba(0,0,0,0.25)]">
              <div className="font-space-mono text-[10px] text-[#f1c888] uppercase tracking-[0.2em] mb-1">
                Our Philosophy
              </div>

              <div className="font-fraunces text-lg">
                Property, made simpler.
              </div>
            </div>

          </div>

          {/* Right - Content */}
          <div className="lg:pt-4">

            {/* Label */}
            <div className="mb-5">
              <p className="font-space-mono text-xs text-[#D4755B] uppercase tracking-[2.4px]">
                Our Story
              </p>
            </div>

            {/* Headline */}
            <h2 className="mb-7">

              <span className="font-syne text-[38px] md:text-[42px] leading-[1.2] text-[#111827] block font-semibold">
                Making Property Discovery
              </span>

              <span className="font-fraunces italic text-[40px] md:text-[44px] leading-[1.2] text-[#D4755B] block mt-1">
                simpler and more meaningful.
              </span>

            </h2>

            {/* Description */}
            <div className="space-y-5 mb-8">

              <p className="font-manrope font-light text-base leading-7 text-[#4b5563]">
                FoundationX | XBR was built around a simple idea: finding the
                right property should be easier, clearer, and less overwhelming.
              </p>

              <p className="font-manrope font-light text-base leading-7 text-[#4b5563]">
                Instead of making people search across countless sources,
                we bring property information together in one place, making
                it easier to explore locations, compare options, and discover
                properties that fit different needs and budgets.
              </p>

              <p className="font-manrope font-light text-base leading-7 text-[#4b5563]">
                We combine thoughtful design with useful property data to
                create an experience that puts the focus where it belongs:
                helping people find a place they can truly call home.
              </p>

            </div>

            {/* Quote */}
            <blockquote className="border-l-4 border-[#f1c888] pl-6 mb-9">

              <p className="font-fraunces italic text-2xl leading-8 text-[#A84F38]">
                “Finding a home should feel inspiring,
                not overwhelming.”
              </p>

            </blockquote>

            {/* Link */}
            <a
              href="#team"
              className="inline-flex items-center gap-2 group"
            >
              <span className="font-space-mono text-sm text-[#111827] border-b border-[#111827] pb-1 group-hover:text-[#D4755B] group-hover:border-[#D4755B] transition-colors">
                Meet Our Team
              </span>

              <ArrowRight className="w-4 h-4 text-[#111827] group-hover:text-[#D4755B] group-hover:translate-x-1 transition-all" />
            </a>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHeritageSection;