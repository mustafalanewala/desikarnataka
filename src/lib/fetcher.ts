import { ApiResponse } from "./types";

export const fetcher = async (): Promise<ApiResponse> => {
  const res = await fetch("/api/news", {
    cache: "no-store"
  });
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
};
