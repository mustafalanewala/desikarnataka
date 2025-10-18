// Utilities for working with NewsItem data without hardcoding content.
import type { NewsItem } from "./types"

export function formatDate(iso: string) {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return iso
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

// Category mapping for URL slugs (Kannada names to English slugs)
const categorySlugMap: Record<string, string> = {
  "ಸಾಮಾನ್ಯ": "general",
  "ಬ್ಯುಸಿನೆಸ್": "business",
};

export function slugifyCategory(name: string) {
  // First check if we have a predefined mapping
  if (categorySlugMap[name]) {
    return categorySlugMap[name];
  }

  // Fallback to the original logic for any unmapped categories
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export function getCategoryNameFromSlug(slug: string): string {
  // Find the Kannada name for the given slug
  const entry = Object.entries(categorySlugMap).find(([_, s]) => s === slug);
  return entry ? entry[0] : slug;
}

export function getCategories(items: NewsItem[]) {
  const set = new Set(
    items.filter((i) => i.categrory_Name?.trim()).map((i) => i.categrory_Name.trim()),
  )
  return Array.from(set).sort()
}

export function getBySlug(items: NewsItem[], slug: string) {
  return items.find((i) => i.slug === slug)
}

export function filterByCategory(items: NewsItem[], categorySlug: string) {
  return items.filter((i) => slugifyCategory(i.categrory_Name) === categorySlug)
}

export function getCategoryFromSlug(items: NewsItem[], categorySlug: string) {
  // First try to find by exact category name match
  const found = items.find((i) => slugifyCategory(i.categrory_Name) === categorySlug);
  return found?.categrory_Name || getCategoryNameFromSlug(categorySlug);
}
