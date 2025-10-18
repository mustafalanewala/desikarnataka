"use client";

import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { cn } from "@/lib/utils";
import { fetcher } from "@/lib/fetcher";
import { getCategories, slugifyCategory } from "@/lib/news-utils";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { data } = useSWR("news-data", fetcher);
  const categories = getCategories(data?.data?.news || []);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-accent-green shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section with logo, categories, and menu */}
        <div className="flex justify-between md:grid md:grid-cols-3 items-center py-4">
          <div className="justify-self-start">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-white">
                ದೇಶಿ ಕರ್ನಾಟಕ
              </span>
            </Link>
          </div>

          <div className="justify-self-center hidden md:flex space-x-8">
            {categories.map((category, index) => (
              <Link
                key={category}
                href={`/category/${slugifyCategory(category)}`}
                className={cn(
                  "font-medium text-base whitespace-nowrap transition-colors duration-200",
                  "text-white hover:text-yellow-300"
                )}
              >
                {category}
              </Link>
            ))}
          </div>

          <div className="justify-self-end">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-yellow-300"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="flex flex-col space-y-3 py-4 border-t border-accent-green bg-accent-green">
            <div className="md:hidden">
              {categories.map((category) => (
                <Link
                  key={category}
                  href={`/category/${slugifyCategory(category)}`}
                  className="font-medium text-lg text-white hover:text-yellow-300 transition-colors duration-200 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {category}
                </Link>
              ))}
            </div>
            <div className="border-t border-accent-green pt-3 mt-3 space-y-3">
              <Link
                href="/about"
                className="font-medium text-lg text-white hover:text-yellow-300 transition-colors duration-200 py-2 block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ನಮ್ಮ ಬಗ್ಗೆ
              </Link>
              <Link
                href="/privacy"
                className="font-medium text-lg text-white hover:text-yellow-300 transition-colors duration-200 py-2 block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ಗೌಪ್ಯತಾ ನೀತಿ
              </Link>
              <Link
                href="/contact"
                className="font-medium text-lg text-white hover:text-yellow-300 transition-colors duration-200 py-2 block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ಸಂಪರ್ಕ
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
