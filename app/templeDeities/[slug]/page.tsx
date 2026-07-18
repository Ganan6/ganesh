import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Footer from "../../components/footer";
import Nav from "../../components/nav";
import ganapathiData from "../../../data/32ganapathy.json";

const { deities } = ganapathiData;

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Pre-renders all 32 pages at build time — fast, and fully indexable by Google.
export function generateStaticParams() {
  return deities.map((deity) => ({ slug: deity.slug }));
}

// Per-page SEO metadata, generated from the data — no manual writing per page.
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const deity = deities.find((d) => d.slug === slug);
  if (!deity) return {};

  return {
    title: `${deity.heading} (${deity.headingTamil}) | 32 Forms of Ganapathi`,
    description: deity.englishText.slice(0, 155),
  };
}

export default async function GanapathiPage({ params }: PageProps) {
  const { slug } = await params;
  const index = deities.findIndex((d) => d.slug === slug);
  if (index === -1) notFound();

  const deity = deities[index];
  const prev = deities[(index - 1 + deities.length) % deities.length];
  const next = deities[(index + 1) % deities.length];

  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* JSON-LD structured data for search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: deity.heading,
            alternateName: deity.headingTamil,
            description: deity.englishText,
            image: `/32ganapathy/${deity.image}`,
            position: deity.order,
            isPartOf: {
              "@type": "CreativeWorkSeries",
              name: "32 Forms of Ganapathi",
            },
          }),
        }}
      />

      {/* Nav Section */}
      <section className="flex flex-col p-4 md:p-6 text-white rounded-lg mx-4 my-2 shadow-lg">
        <div className="flex items-top justify-between mb-2 md:pr-12 pr-4">
          <a href="/">
            <img
              src="/logo.png"
              alt="Ganesh"
              className="h-20 opacity-0 bg-white rounded-4xl p-1 animate-[fadeInUp_1s_ease-out_0.25s_forwards]"
            />
          </a>
          <Nav />
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="px-6 md:px-10 mx-4 mt-2 opacity-0 animate-[fadeInUp_1s_ease-out_0.2s_forwards]">
        <Link
          href="/templeDeities"
          className="text-sm text-yellow-500 hover:text-orange-500 transition-colors duration-300"
        >
          ← All 32 Forms
        </Link>
      </div>

      {/* Deity Section */}
      <section className="relative my-4 py-10 px-6 md:px-10 m-4 bg-linear-to-b from-amber-50 to-white overflow-hidden rounded-2xl opacity-0 animate-[fadeInUp_1.1s_ease-out_0.35s_forwards]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-linear-to-tr from-yellow-400/30 to-orange-500/20 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition duration-500" />

            <div className="relative rounded-3xl shadow-2xl overflow-hidden">
              <img
                src={`/32ganapathy/${deity.image}`}
                alt={deity.heading}
                className="w-full h-auto max-h-175 object-contain rounded-3xl"
              />
              <div className="absolute inset-0 rounded-3xl border-4 border-yellow-400/40 pointer-events-none" />

              <span className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-sm font-bold text-yellow-400 backdrop-blur-sm">
                {deity.order}
              </span>
            </div>
          </div>

          {/* Text */}
          <div className="text-center md:text-left">
            <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
              Form {deity.order} of 32
            </span>

            <h1 className="mt-3 text-3xl md:text-4xl font-bold text-amber-800 mb-1">
              {deity.heading}
            </h1>
            <h2 className="text-xl md:text-2xl text-orange-600 mb-6">
              {deity.headingTamil}
            </h2>

            <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-5">
              {deity.englishText}
            </p>

            <p
              lang="ta"
              className="text-gray-600 leading-relaxed text-base md:text-lg font-tamil"
            >
              {deity.tamilText}
            </p>

            <div className="mt-8 h-1 w-24 bg-linear-to-r from-yellow-500 to-orange-500 mx-auto md:mx-0 rounded-full" />
          </div>
        </div>
      </section>

      {/* Prev / Next Navigation */}
      <section className="mx-4 mb-4 grid grid-cols-2 gap-4 opacity-0 animate-[fadeInUp_1s_ease-out_0.5s_forwards]">
        <Link
          href={`/templeDeities/${prev.slug}`}
          className="group flex items-center gap-3 bg-linear-to-b from-amber-50 to-white rounded-2xl p-4 shadow-lg hover:shadow-orange-300/40 transition-all duration-300 hover:-translate-y-1"
        >
          <img
            src={`/32ganapathy/${prev.image}`}
            alt={prev.heading}
            className="h-14 w-14 rounded-full object-cover ring-2 ring-yellow-400/40 group-hover:ring-yellow-400 transition-all duration-300 shrink-0"
          />
          <div className="min-w-0 text-left">
            <span className="block text-xs text-gray-400">← Previous</span>
            <span className="block text-sm md:text-base font-semibold text-amber-800 truncate">
              {prev.heading}
            </span>
          </div>
        </Link>

        <Link
          href={`/templeDeities/${next.slug}`}
          className="group flex items-center justify-end gap-3 bg-linear-to-b from-amber-50 to-white rounded-2xl p-4 shadow-lg hover:shadow-orange-300/40 transition-all duration-300 hover:-translate-y-1 text-right"
        >
          <div className="min-w-0">
            <span className="block text-xs text-gray-400">Next →</span>
            <span className="block text-sm md:text-base font-semibold text-amber-800 truncate">
              {next.heading}
            </span>
          </div>
          <img
            src={`/32ganapathy/${next.image}`}
            alt={next.heading}
            className="h-14 w-14 rounded-full object-cover ring-2 ring-yellow-400/40 group-hover:ring-yellow-400 transition-all duration-300 shrink-0"
          />
        </Link>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
