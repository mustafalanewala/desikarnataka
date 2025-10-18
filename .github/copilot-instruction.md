# News Website Development Guidelines

## Image Optimization

**IMPORTANT:** For image optimization in code, use Next.js Image component only. Do not use other image optimization libraries or tools.

## Typography Guidelines

| Headlines Font Style     | Body Font Style    |
| ------------------------ | ------------------ |
| Georgia-like Serif       | Georgia            |
| Lato / Sans-serif        | Open Sans / Roboto |
| Roboto Slab / Serif-Slab | Open Sans          |

## Logo Size Standards for Online News Sites

### 🖥️ Desktop Header Logo

- Width: 150 – 300 px
- Height: 40 – 80 px
- Aspect Ratio: Wide (e.g., 4:1 or 5:1)
- Example: 250px × 60px is a commonly used size.

### 📱 Mobile Header Logo

- Width: 100 – 180 px
- Height: 30 – 50 px
- Often scaled down from the desktop version.
- Example: 140px × 40px or 120px × 30px

### 🧭 Favicon / Browser Tab Icon

- Size: 16×16, 32×32, 48×48, 64×64 px
- Format: .ico or .png

### 📱 App Icon / Social Media Preview

- Recommended Size: 512×512 px (square)
- Used for Android/iOS icons or Open Graph preview

## Image Sizes for News Websites

### 1. Article Main Image

- Recommended Size: 1200 x 800 pixels (3:2 aspect ratio)
- Max File Size: 150 KB to 300 KB (compressed for faster loading)
- Format: JPEG, PNG

### 2. Thumbnail Image

- Recommended Size: 300 x 200 pixels (16:9 aspect ratio)
- Max File Size: Less than 100 KB
- Format: JPEG, PNG, WebP

### 3. Header/Hero Image

- Recommended Size: 1920 x 1080 pixels (16:9 aspect ratio)
- Max File Size: 300 KB to 1 MB (optimized for performance)
- Format: JPEG, PNG, WebP

### 4. Social Media Sharing (OG Image)

- Recommended Size: 1200 x 630 pixels
- Max File Size: 150 KB to 300 KB
- Format: JPEG, PNG

### 5. Article or Video Captions

- Recommended Size: Small, usually around 100 x 100 pixels for small icons, or inline images of 600-800 pixels for captions.

## Character Limits for News Content

### 1. Headline (Title)

- Recommended Length: 50-70 characters
- Reason: Ensures the title fits in search results and on social media previews.

### 2. Meta Description

- Recommended Length: 150-160 characters
- Reason: Provides a concise summary of the article, displayed in search results.

### 3. Article Lead (Intro Paragraph/Summary)

- Recommended Length: 300-500 characters
- Reason: A brief introduction to hook the reader.

### 4. Body Text (Article Content)

- Short News: 500-800 words (2,500–4,000 characters)
- In-Depth News: 1,500–2,000 words (7,500–10,000 characters)

## Implementation Notes

- Always use Next.js Image component for image optimization
- Follow the specified size guidelines for different image types
- Adhere to character limits for optimal SEO and user experience
- Use appropriate typography combinations from the guidelines above
