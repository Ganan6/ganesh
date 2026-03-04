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

      {/* Donation*/}
      {/* Donation Hero Section */}
        <section className="bg-linear-to-b from-orange-50 to-white py-16 px-6 md:px-20 text-center m-4 rounded-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-orange-600 mb-6">
                Support the Construction of Our New Charity Building
            </h1>

            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700 leading-relaxed">
                Your donation helps us build a permanent home where the next generation can 
                discover their roots in Hinduism, culture, and tradition. Through prayers, 
                cultural activities, and stage programs such as singing, dance, drama, and speech, 
                we nurture confidence, identity, and community pride.
            </p>
        </section>


        {/* Why Donate Section */}
        <section className="py-12 px-6 md:px-20 bg-white m-4 rounded-lg">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">

                <div className="p-6 rounded-2xl shadow-lg bg-orange-50">
                <h3 className="text-xl font-semibold text-orange-600 mb-3">
                    🏛 Build a Permanent Home
                </h3>
                <p className="text-gray-600">
                    Help us establish a lasting spiritual and cultural centre for future generations.
                </p>
                </div>

                <div className="p-6 rounded-2xl shadow-lg bg-orange-50">
                <h3 className="text-xl font-semibold text-orange-600 mb-3">
                    🎭 Preserve Culture
                </h3>
                <p className="text-gray-600">
                    Support Tamil arts, music, dance, drama, and traditional education.
                </p>
                </div>

                <div className="p-6 rounded-2xl shadow-lg bg-orange-50">
                <h3 className="text-xl font-semibold text-orange-600 mb-3">
                    🙏 Strengthen Community
                </h3>
                <p className="text-gray-600">
                    Create a space where faith, unity, and identity flourish.
                </p>
                </div>

            </div>
        </section>


        {/* Online Donation Section */}
        <section className="py-16 px-6 md:px-20 bg-linear-to-b from-white to-orange-50 text-center m-4 rounded-lg">

            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-8">
                Donate Online
            </h2>

            <div className="flex flex-col md:flex-row gap-6 justify-center">

                {/* SumUp Button */}
                <a
                href="https://pay.sumup.com/b2c/Q93WH5YA"  // 🔁 Replace with your SumUp payment link
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transition duration-300"
                >
                Donate via SumUp
                </a>

                {/* JustGiving Button */}
                <a
                href="https://www.justgiving.com/campaign/skhca"  // 🔁 Replace with your JustGiving link
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transition duration-300"
                >
                Donate via JustGiving
                </a>

            </div>

            <p className="mt-6 text-gray-600">
                Click the link above to enter a custom amount and donate securely online.
            </p>

        </section>


        {/* Bank Transfer Section */}
        <section className="py-16 px-6 md:px-20 bg-white m-4 rounded-lg">
            <div className="max-w-3xl mx-auto bg-orange-50 rounded-2xl shadow-lg p-8">

                <h2 className="text-2xl font-bold text-orange-600 mb-6 text-center">
                Donate via Bank Transfer
                </h2>

                <div className="space-y-4 text-gray-700 text-lg">

                <p><strong>Account Name:</strong> Shri Kalpaga Hindu Cultural Association</p>
                <p><strong>Bank Name:</strong> Metro</p>
                <p><strong>Sort Code:</strong> 23-05-80</p>
                <p><strong>Account Number:</strong> 42463140</p>
                <p><strong>Acc Type:</strong> Business</p>
                <p><strong>Reference:</strong> Your Name</p>

                </div>

            </div>
        </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}