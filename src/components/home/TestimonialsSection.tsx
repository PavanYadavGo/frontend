import React from 'react';

const TestimonialsSection: React.FC = () => {
  const highlights = [
    {
      quote:
        'A much simpler way to explore properties without having to jump between multiple listing pages.',
      name: 'Property Explorer',
      role: 'Platform User',
    },
    {
      quote:
        'Having the important property details together makes it easier to compare different options.',
      name: 'Home Seeker',
      role: 'Platform User',
    },
    {
      quote:
        'The clean interface makes browsing properties feel straightforward and less overwhelming.',
      name: 'Property Buyer',
      role: 'Platform User',
    },
  ];

  return (
    <section className="bg-[#F9F7F2] py-24">
      <div className="max-w-[1280px] mx-auto px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="font-space-mono text-sm text-[#f1c888] uppercase tracking-widest mb-4">
            The Experience
          </div>

          <h2 className="font-fraunces text-5xl md:text-6xl text-[#111827] mb-6">
            Built for Better Decisions
          </h2>

          <p className="font-manrope font-light text-lg text-[#4b5563] max-w-[700px] mx-auto leading-relaxed">
            Everything you need to explore properties, compare your options,
            and move closer to finding the right place.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white border border-[#f3f4f6] rounded-2xl p-8 shadow-[0px_15px_30px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-transform duration-300"
            >

              {/* Quote Icon */}
              <div className="w-11 h-11 bg-[#F9F7F2] rounded-xl flex items-center justify-center mb-6">
                <span className="font-material-icons text-2xl text-[#f1c888]">
                  format_quote
                </span>
              </div>

              {/* Quote */}
              <p className="font-manrope text-base text-[#4b5563] leading-relaxed mb-8">
                “{highlight.quote}”
              </p>

              {/* User */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-[#111827] rounded-full flex items-center justify-center">
                  <span className="font-material-icons text-xl text-[#f1c888]">
                    person
                  </span>
                </div>

                <div>
                  <div className="font-syne font-bold text-sm text-[#111827]">
                    {highlight.name}
                  </div>

                  <div className="font-manrope text-xs text-[#6b7280]">
                    {highlight.role}
                  </div>
                </div>
              </div>

            </div>
          ))}

        </div>

        {/* Bottom Trust Statement */}
        <div className="text-center mt-14">
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-[#eeeae4]">
            <span className="font-material-icons text-lg text-[#f1c888]">
              check_circle
            </span>

            <span className="font-manrope text-sm text-[#4b5563]">
              Designed to make property discovery simpler
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;