import React from 'react';

const ProcessSection: React.FC = () => {
  return (
    <section className="bg-[#F0EBE5] py-24">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left - Sticky Content */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <div className="font-space-mono text-sm text-[#f1c888] uppercase tracking-widest mb-6">
                Process
              </div>

              <h2 className="font-fraunces text-5xl text-[#111827] mb-6 leading-tight">
                The Path to Your<br />
                <span className="italic text-[#f1c888]">New Beginning</span>
              </h2>

              <p className="font-manrope font-light text-lg text-[#4b5563] mb-8 leading-relaxed">
                We've simplified the complex journey of finding and buying a home
                into four clear and straightforward steps.
              </p>

              <button className="bg-[#111827] text-white font-manrope font-medium px-8 py-3 rounded-lg shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)] hover:bg-[#1f2937] transition-all">
                Start Your Journey
              </button>
            </div>
          </div>

          {/* Right - Process Steps */}
          <div className="lg:col-span-8 space-y-12">

            {/* Step 1 */}
            <div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 border border-[#d1d5db] rounded-full flex items-center justify-center">
                    <span className="font-space-mono font-bold text-lg text-[#9ca3af]">
                      01
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="font-syne font-bold text-2xl text-[#111827] mb-3">
                    Define Your Needs
                  </h3>

                  <p className="font-manrope text-base text-[#4b5563] leading-relaxed">
                    Set your preferred location, budget, property type, size,
                    and other requirements to narrow down your search.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 border border-[#d1d5db] rounded-full flex items-center justify-center">
                    <span className="font-space-mono font-bold text-lg text-[#9ca3af]">
                      02
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="font-syne font-bold text-2xl text-[#111827] mb-3">
                    Explore Properties
                  </h3>

                  <p className="font-manrope text-base text-[#4b5563] leading-relaxed">
                    Browse available listings and discover properties that
                    match your selected location, budget, and requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 border border-[#d1d5db] rounded-full flex items-center justify-center">
                    <span className="font-space-mono font-bold text-lg text-[#9ca3af]">
                      03
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="font-syne font-bold text-2xl text-[#111827] mb-3">
                    Compare & Shortlist
                  </h3>

                  <p className="font-manrope text-base text-[#4b5563] leading-relaxed">
                    Review property details, compare your options, and shortlist
                    the homes that best fit your needs.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 border border-[#d1d5db] rounded-full flex items-center justify-center">
                    <span className="font-space-mono font-bold text-lg text-[#9ca3af]">
                      04
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="font-syne font-bold text-2xl text-[#111827] mb-3">
                    Make Your Move
                  </h3>

                  <p className="font-manrope text-base text-[#4b5563] leading-relaxed">
                    Once you've found the right property, connect with the
                    relevant parties and move forward with your purchase.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;