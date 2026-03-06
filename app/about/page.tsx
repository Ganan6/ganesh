"use client";

import React, { useState, useRef, useEffect } from "react";
import Footer from "../components/footer";
import Nav from "../components/nav";

export default function Page() {

  // === Scroll-trigger zoom for mobile ===
  const deityRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  const deityRef2 = useRef<HTMLDivElement | null>(null);
  const [visible2, setVisible2] = useState(false);  

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === deityRef.current && entry.isIntersecting) {
            setVisible(true);
          }

          if (entry.target === deityRef2.current && entry.isIntersecting) {
            setVisible2(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (deityRef.current) observer.observe(deityRef.current);
    if (deityRef2.current) observer.observe(deityRef2.current);

    return () => {
      if (deityRef.current) observer.unobserve(deityRef.current);
      if (deityRef2.current) observer.unobserve(deityRef2.current);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Nav Section */}
      <section className="flex flex-col p-4 md:p-6 text-white rounded-lg mx-4 my-2 shadow-lg">
        <div className="flex items-top justify-between mb-2 md:pr-12 pr-4">
          <a href="/"><img src="/logo.png" alt="Ganesh" className="h-20 opacity-0 bg-white rounded-4xl p-1 animate-[fadeInUp_1s_ease-out_0.25s_forwards]" /></a>
          <Nav />
        </div>
      </section>


      {/* About Section */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center px-6 md:px-20 pb-8 animate-[fadeInUp_1.2s_ease-out_0.5s_forwards] opacity-0">
    
        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-orange-600">
          Sri Kalpaga Vinayagar Temple
        </h1>

        <p className="text-lg md:text-xl max-w-4xl leading-relaxed text-gray-200">
          Nestled in the peaceful town of Aberkenfig in Bridgend, within the blessed lands of Wales, 
          stands a sacred beacon of faith and divine grace. Surrounded by timeless natural beauty, 
          this revered temple shines as a sanctuary of hope, prayer, and miracles.
          <br /><br />
          Opened in Port Talbot on the auspicious day of Panguni Uththaram in 2007, this holy abode marks the 
          living presence of Lord Vinayagar in this sacred land. Through His boundless grace, 
          obstacles are removed, prayers are answered, and lives are uplifted.
          <br /><br />
          Built by the unwavering devotion of Welsh devotees, this temple stands as a testament 
          to faith, unity, and divine blessings that continue to flow upon all who enter with pure hearts.
        </p>
      </div>

      {/* Temple Deities Section */}
      <section className="relative my-4 py-8 px-6 md:px-10 m-4 bg-linear-to-b from-amber-50 to-white overflow-hidden rounded-2xl">

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 md:gap-24 items-center">

          {/* Deity Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-linear-to-tr from-yellow-400/30 to-orange-500/20 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition duration-500"></div>
            
            <div
              ref={deityRef}
              className={`relative rounded-3xl shadow-2xl overflow-hidden transform transition-transform duration-700 ${
                visible ? "scale-105" : "scale-95"
              }`}
            >
              <img
                src="/deity1.JPG"
                alt="Sri Kalpaga Vinayagar"
                className="w-full h-74 md:h-156 object-cover rounded-3xl"
              />
              <div className="absolute inset-0 rounded-3xl border-4 border-yellow-400/40 pointer-events-none"></div>
            </div>

            {/* Golden Border Glow */}
            <div className="absolute inset-0 rounded-3xl border-4 border-yellow-400/40 pointer-events-none"></div>
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left">

            <h2 className="text-4xl md:text-5xl font-bold text-amber-800 mb-6">
              Sri Kalpaga Vinayagar
            </h2>

            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              The presiding Lord of this sacred shrine was in the times of yore known as 
              <span className="font-semibold text-amber-700"> Sri Kalpaga Vinayagar</span>.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg">
              Kalpagam is akin to the sacred <span className="font-semibold text-amber-700">
              Kalpaga / Karpaga Viruksham</span> — the celestial wish-fulfilling tree, 
              revered in Hindu tradition as the Tree of Life. 
              <br /><br />
              As our divine Kalpaga Vinayagar is believed to graciously fulfill the heartfelt 
              prayers and aspirations of devotees, He is worshipped with deep devotion 
              as <span className="font-semibold text-amber-700">Sri Kalpaga Vinayagar</span>, 
              the compassionate granter of blessings.
            </p>

            {/* Decorative Divider */}
            <div className="mt-8 h-1 w-24 bg-linear-to-r from-yellow-500 to-orange-500 mx-auto md:mx-0 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 px-6 md:px-20 bg-linear-to-b from-white to-orange-50 m-4 rounded-lg">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4">
            Visit Our Temple
          </h2>
          <p className="text-gray-700 text-lg">
            Sri Kalpaga Vinayagar Temple  
            <br />
            M4 Junction 36, Pandy Road, Aberkenfig  
            <br />
            Bridgend, CF32 9PP, United Kingdom
          </p>
        </div>

        {/* Map Container */}
        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-orange-100">

          <div ref={deityRef2} className={`relative w-full h-0 pb-[56.25%] transform transition-transform duration-1200 ${
                visible2 ? "scale-105" : "scale-95"}`}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.5075865771782!2d-3.5976617232293413!3d51.540590871820925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e6c06c2901a19%3A0x35830470597b9774!2sWales%20Shri%20Kalpaga%20Vinayagar%20Temple%20(Ganesh%20Temple)!5e0!3m2!1sen!2suk!4v1772578059158!5m2!1sen!2suk"
              className="absolute top-2 left-5 w-full h-full"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

        {/* Open in Google Maps Button */}
        <div className="text-center mt-8">
          <a
            href="https://maps.app.goo.gl/3WAdb38BzAR52aQc6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-600 hover:bg-orange-500 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-lg transition duration-300"
          >
            Open in Google Maps
          </a>
        </div>
        <div className="grid md:grid-cols-2 rounded-lg mt-6 md:gap-4">
          <img src="/train.jpg" alt="Train" className="w-full h-auto object-contain" />
          <img src="/bus.jpg" alt="Bus" className="w-full h-auto object-contain" />
        </div>
      </section>


      {/* Footer */}
      <Footer />
    </div>
  );
}