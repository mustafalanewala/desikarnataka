export type NewsItem = {
  news_Id: number
  news_Title: string
  slug: string
  news_Content: string
  image: string
  insert_Date: string
  news_Source: string
  category_Id: number
  categrory_Name: string
  type_Id: number
  type_Name: string
}

export type VideoItem = {
  videoDetail_id: number
  videoTitle: string
  image: string
  fileName: string
  insert_Date: string
}

export type GalleryItem = {
  galleryMaster_id: number
  galleryMaster_Title: string
  image: string | null
  insert_Date: string
  galleryDetailList: {
    gallery_Detail_id: number
    fileName: string
  }[]
}

export type ApiResponse = {
  success: boolean
  message: string
  data: {
    news: NewsItem[]
    videos: VideoItem[]
    galleries: GalleryItem[]
  }
}