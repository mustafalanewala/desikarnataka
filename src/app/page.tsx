"use client";

import BreakingNews from "@/components/BreakingNews";
import Hero from "@/components/Hero";
import Ad from "@/components/Ad";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-blue-50">
      <Hero />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Ad slot="homepage-banner" format="banner" className="mb-8" />
      </div>
      <BreakingNews />
    </div>
  );
}
