"use client";

import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";

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
          <div className="space-y-6">
            {blogs.map((b: any) => (
              <div
                key={b.blog_Id}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h3 className="font-semibold text-lg mb-2">{b.blog_Title}</h3>
                <p className="text-sm text-gray-600">{b.insert_Date}</p>
                <p className="text-gray-700 mt-2">{b.blog_Content}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
