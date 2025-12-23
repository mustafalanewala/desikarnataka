"use client";

import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import Image from "next/image";
import { useState } from "react";

export default function VideosPage() {
  const { data, error, isLoading } = useSWR("news-data", fetcher);
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null);

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

  const handlePlayVideo = (videoId: number) => {
    setPlayingVideoId(videoId);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-black mb-6">ವೀಡಿಯೊಗಳು</h1>
        {videos.length === 0 ? (
          <p className="text-gray-600">ಯಾವುದೇ ವೀಡಿಯೊಗಳು ಲಭ್ಯವಿಲ್ಲ.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((v: any) => (
              <div
                key={v.videoDetail_id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 cursor-pointer group" onClick={() => handlePlayVideo(v.videoDetail_id)}>
                  {playingVideoId === v.videoDetail_id ? (
                    <iframe
                      src={`${v.fileName}?autoplay=1`}
                      title={v.videoTitle}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <>
                      <Image
                        src={v.image}
                        alt={v.videoTitle}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                      {/* Play button overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-300">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <svg
                            className="w-8 h-8 text-accent-green ml-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">{v.videoTitle}</h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
