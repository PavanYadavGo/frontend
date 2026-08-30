import React from 'react';
import { Lightbulb, Eye, Award } from 'lucide-react';

const AboutValuesSection: React.FC = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Thoughtful Discovery',
      description:
        'We make property discovery simpler and more meaningful, helping you explore the right opportunities without unnecessary complexity.'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description:
        'Clear property information, straightforward details, and an honest experience give you the confidence to make informed decisions.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description:
        'From discovering a property to taking the next step, we focus on creating a refined experience built around quality and care.'
    }
  ];

  return (
    <section className="bg-[#F9F7F2] py-20 md:py-24">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">

        {/* Section Header */}
        <div className="text-center mb-14 md:mb-16">

          <div className="font-space-mono text-xs text-[#D4755B] uppercase tracking-[0.2em] mb-4">
            What We Stand For
          </div>

          <h2 className="font-fraunces text-4xl md:text-5xl text-[#111827] leading-tight">
            Driven by Purpose
          </h2>

          <div className="w-16 h-px bg-[#f1c888] mx-auto mt-6" />

        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <div
                key={index}
                className="
                  group
                  bg-white
                  border border-[#E6E0DA]
                  rounded-2xl
                  p-8 md:p-9
                  text-center
                  shadow-[0px_10px_30px_-15px_rgba(17,24,39,0.15)]
                  hover:-translate-y-1
                  hover:shadow-[0px_20px_40px_-15px_rgba(17,24,39,0.2)]
                  transition-all duration-300
                "
              >

                {/* Icon */}
                <div className="
                  w-16 h-16
                  bg-[#111827]
                  rounded-2xl
                  flex items-center justify-center
                  mx-auto mb-7
                  group-hover:bg-[#f1c888]
                  transition-colors duration-300
                ">
                  <Icon
                    className="w-7 h-7 text-[#f1c888] group-hover:text-[#111827] transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h3 className="font-syne font-bold text-xl text-[#111827] mb-4">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="font-manrope font-light text-sm md:text-base leading-7 text-[#6b7280]">
                  {value.description}
                </p>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default AboutValuesSection;