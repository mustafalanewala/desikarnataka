"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import { NewsItem } from "@/lib/types";
import { slugifyCategory } from "@/lib/news-utils";
import Image from "next/image";

// Carousel-based hero for top news
export default function Hero() {
  const { data, error, isLoading } = useSWR("news-data", fetcher);
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const news: NewsItem[] = useMemo(() => {
    if (!data?.data?.news) return [];
    return data.data.news
      .slice()
      .sort(
        (a, b) =>
          new Date(b.insert_Date).getTime() - new Date(a.insert_Date).getTime()
      );
  }, [data]);

  // Auto advance every 5s
  useEffect(() => {
    if (isPaused || news.length === 0) return;
    const t = setInterval(
      () => setIndex((i) => (i + 1) % Math.min(news.length, 6)),
      5000
    );
    return () => clearInterval(t);
  }, [isPaused, news]);

  if (isLoading) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-accent-green rounded-full animate-spin mx-auto mb-4" />
          <p className="text-black">ಲೋಡ್ ಆಗುತ್ತಿದೆ...</p>
        </div>
      </section>
    );
  }

  if (!news || news.length === 0) {
    return (
      <section className="min-h-[40vh] flex items-center justify-center bg-white">
        <p className="text-black">ಸುದ್ದಿ ಲಭ್ಯವಿಲ್ಲ</p>
      </section>
    );
  }

  const slides = news.slice(0, 6);
  const goPrev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const goNext = () => setIndex((i) => (i + 1) % slides.length);
  const goTo = (i: number) => setIndex(i % slides.length);

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative bg-white py-12"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-extrabold text-black">
              ಪ್ರಮುಖ ಸುದ್ದಿಗಳು
            </h2>
            <p className="text-sm text-gray-600">
              ಇತ್ತೀಚಿನ ಮತ್ತು ಹಾಟ್ ಟಾಪಿಕ್ ಅಪ್ಡೇಟ್ಸ್
            </p>
          </div>
          <div className="space-x-2">
            <button
              aria-label="Previous"
              onClick={goPrev}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black text-white hover:bg-accent-green/90"
            >
              ‹
            </button>
            <button
              aria-label="Next"
              onClick={goNext}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black text-white hover:bg-accent-green/90"
            >
              ›
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-xl shadow-lg">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((item) => (
              <Link
                key={item.news_Id}
                href={`/news/${encodeURIComponent(item.slug)}`}
                className="min-w-full block relative h-64 md:h-96 bg-gray-50"
              >
                <div className="absolute inset-0">
                  <Image
                    src={item.image}
                    alt={item.news_Title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="relative z-10 p-6 md:p-12 flex flex-col h-full justify-end">
                  <Link href={`/category/${encodeURIComponent(slugifyCategory(item.categrory_Name))}`} className="inline-block px-3 py-1 bg-green-100 w-fit text-accent-green rounded-full text-sm font-semibold mb-3 hover:bg-green-200 transition-colors">
                    {item.categrory_Name}
                  </Link>
                  <h3 className="text-2xl md:text-4xl font-extrabold text-white leading-tight mb-3">
                    {item.news_Title}
                  </h3>
                  <p className="text-sm text-white/90 line-clamp-2 max-w-3xl">
                    {item.news_Content}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center space-x-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-accent-green" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.slice(6, 12).map((item) => (
            <Link
              key={item.news_Id}
              href={`/news/${encodeURIComponent(item.slug)}`}
              className="block bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <div className="relative h-40">
                <Image
                  src={item.image}
                  alt={item.news_Title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-semibold text-black mb-2 line-clamp-2">
                  {item.news_Title}
                </h4>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {item.news_Content}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
