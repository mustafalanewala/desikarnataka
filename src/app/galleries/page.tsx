"use client";

import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import Image from "next/image";

export default function GalleriesPage() {
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
        Error loading galleries.
      </div>
    );

  const galleries = data?.data?.galleries || [];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-black mb-6">ಗ್ಯಾಲರಿ</h1>
        {galleries.length === 0 ? (
          <p className="text-gray-600">No galleries available.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleries.map((g: any) => (
              <div
                key={g.galleryMaster_id}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={g.image}
                    alt={g.galleryMaster_Title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">
                    {g.galleryMaster_Title}
                  </h3>
                  <p className="text-sm text-gray-600">{g.insert_Date}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
