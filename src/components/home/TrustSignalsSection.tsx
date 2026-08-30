import React from 'react';
import teamImage from '../../images/Team section.jpg';

const TrustSignalsSection: React.FC = () => {
  return (
    <section className="bg-[#F8F6F6] py-24">
      <div className="max-w-[1280px] mx-auto px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="font-space-mono text-sm text-[#f1c888] uppercase tracking-widest mb-4">
            Built Around You
          </div>

          <h2 className="font-fraunces text-5xl md:text-6xl text-[#111827] mb-6">
            A Better Way to Find Home
          </h2>

          <p className="font-manrope font-light text-lg text-[#4b5563] max-w-[720px] mx-auto leading-relaxed">
            Finding the right property shouldn't feel complicated. We make it
            easier to explore, compare, and discover homes that fit your needs.
          </p>

          <div className="w-24 h-1 bg-[#f1c888] mx-auto mt-8" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left - Image */}
          <div className="relative">
            {/* Decorative Element */}
            <div className="absolute -top-5 -left-5 w-24 h-24 border-l-2 border-t-2 border-[#f1c888] rounded-tl-2xl opacity-60" />

            <div className="relative border border-[rgba(212,117,91,0.2)] rounded-3xl p-4 bg-white shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.12)]">
              <img
                src={teamImage}
                alt="Our team working together"
                className="rounded-2xl w-full h-auto object-cover"
              />
            </div>

            {/* Small Floating Card */}
            <div className="absolute -bottom-6 -right-4 md:-right-6 bg-[#111827] text-white rounded-xl px-6 py-4 shadow-[0px_15px_30px_-10px_rgba(0,0,0,0.3)]">
              <div className="font-space-mono text-xs text-[#f1c888] uppercase tracking-wider mb-1">
                Our Approach
              </div>
              <div className="font-syne font-bold text-lg">
                Simple. Clear. Reliable.
              </div>
            </div>
          </div>

          {/* Right - Features */}
          <div className="space-y-10">

            {/* Feature 1 */}
            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-white rounded-xl shadow-[0px_4px_10px_-2px_rgba(0,0,0,0.08)] flex items-center justify-center">
                  <span className="font-material-icons text-2xl text-[#f1c888]">
                    verified
                  </span>
                </div>
              </div>

              <div>
                <h4 className="font-syne font-bold text-xl text-[#111827] mb-2">
                  Clear Property Information
                </h4>

                <p className="font-manrope text-base text-[#4b5563] leading-relaxed">
                  Browse detailed property information in one place, making it
                  easier to understand what each listing has to offer.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-white rounded-xl shadow-[0px_4px_10px_-2px_rgba(0,0,0,0.08)] flex items-center justify-center">
                  <span className="font-material-icons text-2xl text-[#f1c888]">
                    search
                  </span>
                </div>
              </div>

              <div>
                <h4 className="font-syne font-bold text-xl text-[#111827] mb-2">
                  Search Made Simpler
                </h4>

                <p className="font-manrope text-base text-[#4b5563] leading-relaxed">
                  Filter properties by the things that matter most to you,
                  helping you spend less time searching and more time deciding.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-white rounded-xl shadow-[0px_4px_10px_-2px_rgba(0,0,0,0.08)] flex items-center justify-center">
                  <span className="font-material-icons text-2xl text-[#f1c888]">
                    compare
                  </span>
                </div>
              </div>

              <div>
                <h4 className="font-syne font-bold text-xl text-[#111827] mb-2">
                  Compare With Confidence
                </h4>

                <p className="font-manrope text-base text-[#4b5563] leading-relaxed">
                  Put properties side by side and evaluate the details that
                  matter before deciding which one deserves your attention.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignalsSection;