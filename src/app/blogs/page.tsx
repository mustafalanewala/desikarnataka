"use client";

import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import Image from "next/image";
import Link from "next/link";

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, '');
}

export default function BlogsPage() {
  const { data, error, isLoading } = useSWR("news-data", fetcher);

  if (isLoading)
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        Loading...
      </div>
    );
  if (error || !data)
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        Error loading blogs.
      </div>
    );

  const blogs = data?.data?.blogs || [];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-black mb-6">ಬ್ಲಾಗ್</h1>
        {blogs.length === 0 ? (
          <p className="text-gray-600">No blog posts available.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((b: any) => (
              <div
                key={b.blog_Id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={b.image}
                    alt={b.blog_Title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">{b.blog_Title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{b.insert_Date}</p>
                  <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">{stripHtml(b.blog_Content)}</p>
                  <Link
                    href={`/blogs/${encodeURIComponent(b.slug)}`}
                    className="inline-block mt-3 px-4 py-2 bg-accent-green text-white text-sm font-medium rounded-lg hover:bg-accent-green/80 transition-colors duration-200"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
