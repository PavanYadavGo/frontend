import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

import {
  Bed,
  Bathtub,
  LocationOn,
  AutoAwesome,
  ChevronLeft,
  ChevronRight
} from "@mui/icons-material";

import hero1 from '../../images/hero/hero1.jpg';
import hero2 from '../../images/hero/hero2.jpg';
import hero3 from '../../images/hero/hero3.jpg';
import hero4 from '../../images/hero/hero4.jpg';

import happyHomeowner1 from '../../images/Happy Homeowners_1.jpg';
import happyHomeowner2 from '../../images/Happy Homeowners_2.jpg';
import happyHomeowner3 from '../../images/Team section.jpg';

const HeroSection: React.FC = () => {
const propertyImages = [
  happyHomeowner1,
  happyHomeowner2,
  happyHomeowner3,
];

const slides = [
  {
    image: hero1,
    title: "Premium Residence",
    location: "Bandra, Mumbai",
    ai: "99%",
    beds: 5,
    baths: 4
  },
  {
    image: hero2,
    title: "Luxury Apartment",
    location: "Powai, Mumbai",
    ai: "97%",
    beds: 3,
    baths: 2
  },
  {
    image: hero3,
    title: "Modern Living",
    location: "Worli, Mumbai",
    ai: "98%",
    beds: 4,
    baths: 4
  },
  {
    image: hero4,
    title: "Signature Collection",
    location: "Goa",
    ai: "96%",
    beds: 4,
    baths: 3
  },
];

useEffect(() => {
  slides.forEach((slide) => {
    const img = new Image();
    img.src = slide.image;
  });
}, []);

const [current, setCurrent] = useState(0);

useEffect(() => {
  const timer = setInterval(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, 4500);

  return () => clearInterval(timer);
}, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const }
    }
  };

  return (
    <section className="relative bg-[#F8F6F6] pt-20 pb-32 overflow-hidden">
        {/* Background decorative blurs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut" as const
          }}
          className="absolute right-0 top-14 w-64 h-64 bg-[rgba(236,70,19,0.1)] rounded-full blur-[32px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -30, 0], 
            y: [0, 30, 0],
          }}
          transition={{ 
            duration: 10,
            delay: 1,
            repeat: Infinity,
            ease: "easeInOut" as const
          }}
          className="absolute left-[738px] bottom-22 w-64 h-64 bg-[rgba(254,215,170,0.2)] rounded-full blur-[32px]" 
        />

        <div className="max-w-[1280px] mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Badge */}
              <motion.div variants={itemVariants} className="inline-flex items-center gap-3 bg-[rgba(212,117,91,0.1)] border border-[rgba(212,117,91,0.2)] rounded-full px-4 py-2 mb-10">
                <div className="w-2 h-2 bg-[#D4755B] rounded-full" />
                <span className="font-manrope font-bold text-xs text-[#D4755B] uppercase tracking-wider">
                  AI-Powered Real Estate
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1 variants={itemVariants} className="font-fraunces text-[56px] lg:text-[70px] leading-[1.1] text-[#111827] mb-8">
                Discover Your<br />
                <span className="italic text-[#D4755B]">Dream Home</span> with<br />
                AI Intelligence
              </motion.h1>

              {/* Description */}
              <motion.p variants={itemVariants} className="font-manrope font-light text-xl leading-7 text-[#4b5563] mb-12 max-w-[676px]">
                Experience the future of real estate. Our proprietary AI curates the market's
                finest listings tailored specifically to your lifestyle, removing the noise from
                your property search.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-10">
                <Link to="/properties" className="bg-[#D4755B] text-white font-manrope font-bold text-lg px-8 py-4 rounded-xl shadow-[0px_10px_15px_-3px_rgba(212,117,91,0.25),0px_4px_6px_-4px_rgba(212,117,91,0.25)] hover:bg-[#B86851] transition-all hover:shadow-xl inline-flex items-center">
                  Explore Properties
                  <span className="font-material-icons text-sm ml-2">arrow_forward</span>
                </Link>
                <Link to="/ai-hub" className="border-2 border-[#d1d5db] text-[#374151] font-manrope font-bold text-lg px-8 py-4 rounded-xl hover:border-[#D4755B] hover:text-[#D4755B] transition-all inline-flex items-center">
                  <span className="font-material-icons text-2xl text-[#D4755B] mr-2">smart_toy</span>
                  {import.meta.env.PROD ? 'AI Property Hub' : 'Try AI Search'}
                </Link>
              </motion.div>

              {/* Social Proof */}
              <motion.div variants={itemVariants} className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <img src={propertyImages[0]} alt="" className="w-10 h-10 rounded-full border-2 border-[#f8f6f6] object-cover" />
                  <img src={propertyImages[1]} alt="" className="w-10 h-10 rounded-full border-2 border-[#f8f6f6] object-cover" />
                  <img src={propertyImages[2]} alt="" className="w-10 h-10 rounded-full border-2 border-[#f8f6f6] object-cover" />
                  <div className="w-10 h-10 bg-[#111827] rounded-full border-2 border-[#f8f6f6] flex items-center justify-center">
                    <span className="font-manrope font-bold text-xs text-white">+2k</span>
                  </div>
                </div>
                <span className="font-manrope text-sm text-[#6b7280]">
                  Join 2,000+ happy homeowners
                </span>
              </motion.div>
            </motion.div>

            {/* Right - Featured Property Card */}
            <div className="relative">

<div className="relative overflow-hidden rounded-[34px] shadow-[0_30px_60px_rgba(0,0,0,.18)] h-[625px] border border-white/20">

    <AnimatePresence mode="wait">

      <motion.img
        key={current}
        src={slides[current].image}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover"
      />

    </AnimatePresence>

    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

    <motion.div
      key={slides[current].title}
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: .6 }}
      className="absolute bottom-7 left-7 right-7 rounded-[28px] backdrop-blur-2xl bg-gradient-to-br from-white/20 to-white/10 border border-white/25 shadow-2xl p-7 text-white"
    >

      <div className="flex justify-between">

        <div>

          <h2 className="font-fraunces text-3xl">
            {slides[current].title}
          </h2>

<div className="flex items-center gap-2 mt-2 text-white/85">

<LocationOn sx={{ fontSize:18 }} />

<span className="text-sm">
  {slides[current].location}
</span>

</div>

        </div>

        <div className="flex items-center gap-2 bg-[#D4755B]/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">

  <AutoAwesome sx={{ fontSize: 18 }} />

  <span className="text-sm font-semibold">
    AI Match {slides[current].ai}
  </span>

</div>

      </div>

      <div className="flex justify-between items-center mt-6">

        {/* <h3 className="text-3xl font-bold">
          {slides[current].price}
        </h3> */}

<div className="flex gap-6">

<div className="flex items-center gap-2">

<Bed sx={{ fontSize:20 }} />

<span>{slides[current].beds} Beds</span>

</div>

<div className="flex items-center gap-2">

<Bathtub sx={{ fontSize:20 }} />

<span>{slides[current].baths} Baths</span>

</div>

</div>

      </div>

    </motion.div>

<button
  onClick={() =>
    setCurrent((current - 1 + slides.length) % slides.length)
  }
  className="absolute left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/20 backdrop-blur-lg border border-white/20 flex items-center justify-center hover:bg-white/35 transition-all duration-300"
>
  <ChevronLeft />
</button>

{/* Next Button */}
<button
  onClick={() =>
    setCurrent((current + 1) % slides.length)
  }
  className="absolute right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/20 backdrop-blur-lg border border-white/20 flex items-center justify-center hover:bg-white/35 transition-all duration-300"
>
  <ChevronRight />
</button>


    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">

    

      {slides.map((_, i) => (

        <button
          key={i}
          onClick={() => setCurrent(i)}
          className={`h-2.5 rounded-full transition-all duration-300 ${
            current === i
? "bg-[#D4755B] w-10"
: "bg-white/40 w-2.5"
          }`}
        />

      ))}

    </div>

  </div>

</div>
          </div>
        </div>
      </section>
  );
};

export default HeroSection;
