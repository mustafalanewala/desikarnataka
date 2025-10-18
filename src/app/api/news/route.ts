import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch(
      'https://newsapi.timesmed.com/WebAPI/getnewslist?siteId=32&language=Kannada',
      {
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'Mozilla/5.0 (compatible; Next.js App)',
        },
        next: { revalidate: 300 }, // Cache for 5 minutes
      }
    );

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('API fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch news data' },
      { status: 500 }
    );
  }
}