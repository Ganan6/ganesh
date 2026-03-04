"use client";

import React, { useState } from "react";
import Footer from "../components/footer";
import Nav from "../components/nav";

export default function Page() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  return (
    <div className="min-h-screen">

      {/* Header */}
      <title>SKHCA | Donate</title>

      {/* Nav Section */}
        <section className="flex flex-col p-4 md:p-6 text-white rounded-lg mx-4 my-2 shadow-lg bg-linear-to-r from-orange-600 to-red-600">
            <div className="flex items-top justify-between mb-2 md:pr-12 pr-4">
            <a href="/">
                <img
                src="/logo.png"
                alt="Ganesh"
                className="h-20 bg-white rounded-3xl p-1 shadow-md"
                />
            </a>
            <Nav />
            </div>
        </section>

        <section className="py-16 px-6 md:px-20 bg-gradient-to-b from-white to-orange-50 m-4 rounded-2xl shadow-lg">

            {/* Heading */}
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4">
                Get in Touch
                </h2>
                <p className="text-gray-600 text-lg">
                We welcome devotees, volunteers, and visitors with open hearts.
                </p>
            </div>

            {/* Contact Cards */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-16">

                {/* Email */}
                <a
                href="mailto:info@kalpaganesh.com"
                className="bg-amber-100 rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition duration-500"
                >
                <i className="fa-solid fa-envelope text-orange-600 text-2xl mb-4 hover:text-blue-400"></i>
                <h3 className="text-xl text-black font-semibold mb-2">Email Us</h3>
                <p className="text-black">info@kalpaganesh.com</p>
                </a>

                {/* Phone */}
                <a
                href="tel:+441639374655"
                className="bg-amber-100 rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition duration-500"
                >
                <i className="fa-solid fa-phone text-orange-600 text-2xl mb-4 hover:text-blue-400"></i>
                <h3 className="text-xl text-black font-semibold mb-2">Call Us</h3>
                <p className="text-black">+44 1639 374655</p>
                </a>

                {/* Facebook */}
                <a
                href="https://www.facebook.com/profile.php?id=100069003124125"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-100 rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition duration-500"
                >
                <i className="fab fa-facebook-f text-orange-600 text-2xl mb-4 hover:text-blue-400"></i>
                <h3 className="text-xl text-black font-semibold mb-2">Follow Us</h3>
                <p className="text-black">Facebook Page</p>
                </a>

            </div>

            {/* Address Section */}
            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-orange-600 mb-4">
                Visit Our Temple
                </h3>
                <p className="text-gray-700 text-lg">
                Shri Kalpaga Hindu Cultural Association <br />
                Pandy Road, Aberkenfig, Bridgend, UK <br />
                CF32 9PP
                </p>
            </div>

            {/* Map */}
            <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-orange-100">
                <div className="relative w-full h-0 pb-[56.25%]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.5075865771782!2d-3.5976617232293413!3d51.540590871820925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e6c06c2901a19%3A0x35830470597b9774!2sWales%20Shri%20Kalpaga%20Vinayagar%20Temple%20(Ganesh%20Temple)!5e0!3m2!1sen!2suk!4v1772578059158!5m2!1sen!2suk"
                    className="absolute top-0 left-0 w-full h-full"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                </div>
            </div>

            {/* Maps Button */}
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
            </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}