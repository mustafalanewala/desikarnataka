"use client";

import { use } from "react";
import useSWR from "swr";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { fetcher } from "@/lib/fetcher";
import { formatDate, slugifyCategory } from "@/lib/news-utils";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Ad from "@/components/Ad";

export default function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const decodedSlug = decodeURIComponent(slug);

  const { data, error, isLoading } = useSWR("news-data", fetcher);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Error Loading News
          </h1>
          <p className="text-gray-600">Please try again later.</p>
        </div>
      </div>
    );
  }

  const newsItem = data?.data?.news?.find((item) => {
    console.log("Comparing:", item.slug, "with", decodedSlug);
    return item.slug === decodedSlug;
  });

  console.log("News item found:", newsItem);
  console.log(
    "Available slugs:",
    data?.data?.news?.map((item) => item.slug)
  );

  if (!newsItem) {
    notFound();
  }

  const relatedNews = data?.data?.news
    ?.filter(
      (item) =>
        item.categrory_Name === newsItem.categrory_Name &&
        item.news_Id !== newsItem.news_Id
    )
    .sort(() => 0.5 - Math.random()) // Randomize
    .slice(0, 3); // Limit to 3

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <nav className="flex items-center space-x-2 text-sm mb-6 bg-gray-50 py-3 px-4 rounded-lg">
          <Link
            href="/"
            className="text-accent-green hover:underline font-medium flex items-center"
          >
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            ಮನೆ
          </Link>
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
          <Link
            href={`/category/${slugifyCategory(newsItem.categrory_Name)}`}
            className="text-accent-green hover:underline"
          >
            {newsItem.categrory_Name}
          </Link>
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
          <span className="text-gray-600 truncate">{newsItem.news_Title}</span>
        </nav>
      </div>

      {/* Article Card */}
      <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
          {/* Featured Image */}
          <div className="relative h-80 md:h-[500px] w-full">
            <Image
              src={newsItem.image}
              alt={newsItem.news_Title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article Header */}
          <div className="px-6 md:px-12 pt-8 pb-6 border-b border-gray-200">
            <div className="max-w-4xl">
              <span className="inline-block px-4 py-2 bg-accent-green text-white text-sm font-semibold rounded-full mb-4">
                {newsItem.categrory_Name}
              </span>
              <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight text-black">
                {newsItem.news_Title}
              </h1>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <span className="text-gray-600 text-sm">
                  {formatDate(newsItem.insert_Date)}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600 text-sm">Source:</span>
                  <span className="font-semibold text-accent-green bg-accent-green/10 px-3 py-1 rounded-full text-sm">
                    {newsItem.news_Source}
                  </span>
                  <button
                    onClick={async () => {
                      if (navigator.share) {
                        try {
                          await navigator.share({
                            title: newsItem.news_Title,
                            text: newsItem.news_Content.substring(0, 100) + "...",
                            url: window.location.href,
                          });
                        } catch (err) {
                          console.error('Share failed:', err);
                          try {
                            await navigator.clipboard.writeText(window.location.href);
                            alert("Link copied to clipboard!");
                          } catch (clipErr) {
                            console.error('Clipboard failed:', clipErr);
                            alert("Sharing not supported. Please copy the URL manually.");
                          }
                        }
                      } else {
                        try {
                          await navigator.clipboard.writeText(window.location.href);
                          alert("Link copied to clipboard!");
                        } catch (err) {
                          console.error('Clipboard failed:', err);
                          alert("Sharing not supported. Please copy the URL manually.");
                        }
                      }
                    }}
                    className="ml-2 p-2 bg-accent-green/10 rounded-full text-accent-green hover:bg-accent-green/20 transition-colors duration-200"
                    aria-label="Share"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-12">
            <div className="prose prose-xl max-w-none text-gray-900 mb-10">
              {newsItem.news_Content.split("।").map((sentence, index) => (
                <p key={index} className="mb-6 leading-relaxed">
                  {sentence.trim()}
                  {sentence.trim() && "।"}
                </p>
              ))}
            </div>

            <footer className="border-t border-gray-200 pt-8 mt-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center gap-2 text-sm text-black">
                  <span>Published on</span>
                  <span className="font-semibold text-black">
                    {formatDate(newsItem.insert_Date)}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-black">Category:</span>
                  <Link
                    href={`/category/${slugifyCategory(
                      newsItem.categrory_Name
                    )}`}
                    className="px-4 py-2 bg-accent-green text-white rounded-full text-sm font-medium hover:bg-accent-green/80 transition-colors duration-200"
                  >
                    {newsItem.categrory_Name}
                  </Link>
                </div>
              </div>
            </footer>
          </div>
        </div>

        {/* Related Articles */}
        {relatedNews.length > 0 && (
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-black mb-10 text-center">
              ಸಂಬಂಧಿತ ಲೇಖನಗಳು
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedNews.map((article) => (
                <Link
                  key={article.news_Id}
                  href={`/news/${encodeURIComponent(article.slug)}`}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.news_Title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-accent-green text-white text-xs font-semibold rounded-full shadow-lg">
                        {article.categrory_Name}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-black mb-3 line-clamp-2 group-hover:text-accent-green transition-colors duration-200">
                      {article.news_Title}
                    </h3>
                    <p className="text-gray-600 line-clamp-3 mb-4 leading-relaxed">
                      {article.news_Content}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span className="font-medium">{article.news_Source}</span>
                      <span>{formatDate(article.insert_Date)}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </div>
  );
}
