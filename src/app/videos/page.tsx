"use client";

import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import Image from "next/image";

export default function VideosPage() {
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
        Error loading videos.
      </div>
    );

  const videos = data?.data?.videos || [];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-black mb-6">ವೀಡಿಯೊಗಳು</h1>
        {videos.length === 0 ? (
          <p className="text-gray-600">No videos available.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((v: any) => (
              <div
                key={v.videoDetail_id}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={v.image}
                    alt={v.videoTitle}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{v.videoTitle}</h3>
                  {/* Embed button or iframe - fileName is an embed URL */}
                  <div className="mt-2">
                    <a
                      href={v.fileName}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block px-3 py-2 bg-accent-green text-white rounded-md"
                    >
                      Play Video
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
