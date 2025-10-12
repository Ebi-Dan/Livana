"use client"

import { HiExternalLink } from "react-icons/hi"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function BlogCard({ post }) {
  // Extract image from content or use thumbnail
  const getImageUrl = () => {
    if (post.thumbnail) return post.thumbnail

    // Try to extract first image from content
    const imgMatch = post.content?.match(/<img[^>]+src="([^">]+)"/)
    return imgMatch ? imgMatch[1] : "image/soybean-nutrition-healthy-food.jpg"
  }

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  // Get excerpt
  const getExcerpt = () => {
    if (post.description) {
      const text = post.description.replace(/<[^>]*>/g, "")
      return text.length > 150 ? text.substring(0, 150) + "..." : text
    }
    return "Read more about this article..."
  }

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={getImageUrl() || "/placeholder.svg"}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <CardHeader className="flex-grow">
        {/* Date */}
        <p className="text-sm text-muted-foreground mb-2">{formatDate(post.pubDate)}</p>

        {/* Title */}
        <h3 className="text-xl font-bold text-foreground group-hover:text-green-700 transition-colors line-clamp-2 text-balance">
          {post.title}
        </h3>
      </CardHeader>

      <CardContent className="flex-grow">
        {/* Excerpt */}
        <p className="text-muted-foreground leading-relaxed line-clamp-3">{getExcerpt()}</p>
      </CardContent>

      <CardFooter>
        {/* Read More Button */}
        <a
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-green-700 font-semibold hover:gap-3 transition-all group/link"
        >
          Read More
          <HiExternalLink className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
        </a>
      </CardFooter>
    </Card>
  )
}
