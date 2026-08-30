import React from 'react';

const AIIntelligenceSection: React.FC = () => {
  return (
    <section className="bg-[#F8F6F6] py-24">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="font-space-mono text-sm text-[#f1c888] uppercase tracking-widest mb-4">
            Why Choose Us?
          </div>

          <h2 className="font-fraunces text-5xl text-[#111827] mb-6">
            Smarter Property Discovery
          </h2>

          <p className="font-manrope font-light text-lg text-[#4b5563] max-w-[740px] mx-auto">
            We bring together property listings, market information, and location data
            to help you discover the right property with confidence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Feature 1 */}
          <div className="bg-white border border-[#f3f4f6] rounded-2xl p-8 shadow-[0px_20px_25px_-5px_rgba(229,231,235,0.5)]">
            <div className="w-14 h-14 bg-[rgba(212,117,91,0.1)] rounded-xl flex items-center justify-center mb-6">
              <span className="font-material-icons text-3xl text-[#f1c888]">
                query_stats
              </span>
            </div>

            <h3 className="font-syne font-bold text-2xl text-[#111827] mb-4">
              Live Property Data
            </h3>

            <p className="font-manrope text-base text-[#6b7280] leading-relaxed">
              Stay up to date with property listings and market information,
              making it easier to compare opportunities as they appear.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white border border-[#f3f4f6] rounded-2xl p-8 shadow-[0px_20px_25px_-5px_rgba(229,231,235,0.5)]">
            <div className="w-14 h-14 bg-[rgba(212,117,91,0.1)] rounded-xl flex items-center justify-center mb-6">
              <span className="font-material-icons text-3xl text-[#f1c888]">
                compare_arrows
              </span>
            </div>

            <h3 className="font-syne font-bold text-2xl text-[#111827] mb-4">
              Easy Property Comparison
            </h3>

            <p className="font-manrope text-base text-[#6b7280] leading-relaxed">
              Compare properties across price, location, size, amenities, and
              other important details before making your decision.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white border border-[#f3f4f6] rounded-2xl p-8 shadow-[0px_20px_25px_-5px_rgba(229,231,235,0.5)]">
            <div className="w-14 h-14 bg-[rgba(212,117,91,0.1)] rounded-xl flex items-center justify-center mb-6">
              <span className="font-material-icons text-3xl text-[#f1c888]">
                location_city
              </span>
            </div>

            <h3 className="font-syne font-bold text-2xl text-[#111827] mb-4">
              Explore Better Locations
            </h3>

            <p className="font-manrope text-base text-[#6b7280] leading-relaxed">
              Discover properties across different neighborhoods and evaluate
              locations based on connectivity, amenities, and your preferences.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AIIntelligenceSection;