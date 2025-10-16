"use client"

import { useState, useEffect } from "react"
import BlogCard from "./blog-card"
import { HiRefresh } from "react-icons/hi"

export default function BlogSection() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchBlogPosts()
  }, [])

  const fetchBlogPosts = async () => {
    setLoading(true)
    setError(null)

    console.log("[v0] Starting blog posts fetch...")

    try {
      const response = await fetch("/api/blog")
      console.log("[v0] API response status:", response.status)

      const data = await response.json()
      console.log("[v0] API response data:", data)

      if (data.success && data.posts) {
        console.log("[v0] Successfully loaded", data.posts.length, "posts")
        setPosts(data.posts)
      } else {
        throw new Error(data.details || data.error || "Failed to fetch blog posts")
      }
    } catch (err) {
      console.error("[v0] Error in fetchBlogPosts:", err)
      setError(err.message || "Unable to load blog posts. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="blog" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            From Livana Insights
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Discover the latest stories, tips, and insights about sustainable farming, nutrition, and the world of soya
            beans.
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4" />
            <p className="text-muted-foreground">Loading posts...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="flex flex-col items-center justify-center py-16">
            <p className="text-destructive mb-4">{error}</p>
            <button
              onClick={fetchBlogPosts}
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <HiRefresh className="w-5 h-5" />
              Try Again
            </button>
          </div>
        )}

        {/* Blog Grid */}
        {!loading && !error && posts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {posts.map((post, index) => (
              <BlogCard key={index} post={post} />
            ))}
          </div>
        )}

        {/* No Posts State */}
        {!loading && !error && posts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No blog posts available yet.</p>
          </div>
        )}
      </div>
    </section>
  )
}
