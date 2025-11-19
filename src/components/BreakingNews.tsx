"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import { NewsItem } from "@/lib/types";
import Ad from "./Ad";
import Image from "next/image";

export default function BreakingNews() {
  const { data, error, isLoading } = useSWR("news-data", fetcher);

  // derive most recent news
  const allNews = (data?.data?.news || [])
    .slice()
    .sort(
      (a, b) =>
        new Date(b.insert_Date).getTime() - new Date(a.insert_Date).getTime()
    );
  const breakingNews = allNews.slice(0, 12); // take a few for grid and ticker

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(
    new Set(allNews.map((n) => n.categrory_Name))
  );

  if (isLoading || breakingNews.length === 0) return null;

  const filtered = selectedCategory
    ? allNews.filter((n) => n.categrory_Name === selectedCategory).slice(0, 6)
    : allNews.slice(0, 6);

  return (
    <section className="bg-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header and ticker */}
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-accent-green rounded-full animate-ping" />
              <h2 className="text-2xl md:text-3xl font-extrabold text-black">
                ಬ್ರೇಕಿಂಗ್ ನ್ಯೂಸ್{selectedCategory ? ` - ${selectedCategory}` : ""}
              </h2>
            </div>

            <div className="hidden sm:flex items-center space-x-2">
              <span className="text-sm text-gray-600">ಶೇರ್:</span>
              <div className="flex space-x-2">
                <button className="px-3 py-1 rounded-full bg-black text-white text-sm">
                  Share
                </button>
              </div>
            </div>
          </div>

          {/* Ticker */}
          <div className="mt-4 overflow-hidden">
            <div className="flex gap-6 animate-[scroll_20s_linear_infinite] whitespace-nowrap">
              {breakingNews.slice(0, 10).map((n) => (
                <Link
                  key={n.news_Id}
                  href={`/news/${encodeURIComponent(n.slug)}`}
                  className="inline-block mr-8 text-sm text-gray-800 hover:text-accent-green"
                >
                  {n.news_Title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Category filters */}
        <div className="mb-6 flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedCategory
                ? "bg-gray-100 text-black"
                : "bg-accent-green text-white"
            }`}
          >
            ಎಲ್ಲಾ
          </button>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCategory(c)}
              className={`px-3 py-1 rounded-full text-sm ${
                selectedCategory === c
                  ? "bg-accent-green text-white"
                  : "bg-gray-100 text-black"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((news, index) => (
              <div
                key={news.news_Id}
                className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
              >
                <Link
                  href={`/news/${encodeURIComponent(news.slug)}`}
                  className="block"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={news.image}
                      alt={news.news_Title}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-green-100 text-accent-green text-xs font-semibold rounded-full">
                        {news.categrory_Name}
                      </span>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-bold text-black mb-2 line-clamp-2">
                      {news.news_Title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                      {news.news_Content.substring(0, 120)}...
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{news.news_Source}</span>
                      <span>
                        {new Date(news.insert_Date).toLocaleDateString("kn-IN", {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg">
              No articles found in this category.
            </div>
          </div>
        )}

        {/* Bottom ad */}
        <div className="mt-8">
          <Ad slot="breaking-news-bottom" format="rectangle" />
        </div>
      </div>
    </section>
  );
}
