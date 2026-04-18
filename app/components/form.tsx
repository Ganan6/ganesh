"use client";

import { useState } from "react";

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setResult("");

    const formData = new FormData(event.currentTarget);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    if (!accessKey) {
      setResult("❌ Config error. Try again later.");
      setLoading(false);
      return;
    }

    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ Message sent successfully!");
        (event.currentTarget as HTMLFormElement).reset();
      } else {
        setResult("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("❌ Network error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <div className="rounded-2xl border border-amber-900 bg-amber-50 shadow-md p-6 md:p-10">

        <h2 className="text-2xl md:text-3xl font-semibold text-amber-900 mb-6 text-center">
          Contact Us
        </h2>

        <form onSubmit={onSubmit} className="space-y-5">

          {/* Name + Email */}
          <div className="grid gap-4 md:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full rounded-lg border border-amber-200 bg-white px-4 py-2.5 text-sm text-amber-900 placeholder-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="w-full rounded-lg border border-amber-200 bg-white px-4 py-2.5 text-sm text-amber-900 placeholder-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
            />
          </div>

          {/* Subject */}
          <input
            type="text"
            name="subject"
            placeholder="Subject (optional)"
            className="w-full rounded-lg border border-amber-200 bg-white px-4 py-2.5 text-sm text-amber-900 placeholder-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your message..."
            required
            rows={5}
            className="w-full rounded-lg border border-amber-200 bg-white px-4 py-2.5 text-sm text-amber-900 placeholder-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-400 transition resize-none"
          />

          {/* Spam protection */}
          <input type="hidden" name="botcheck" className="hidden" />

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-medium py-2.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Status */}
          {result && (
            <p className="text-center text-sm text-amber-700 mt-2">
              {result}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}