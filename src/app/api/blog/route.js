export async function GET() {
  try {
    const mediumUsername = "nonystarger700"
    const rssUrl = `https://medium.com/feed/@${mediumUsername}`

    console.log("[v0] Fetching Medium RSS feed from:", rssUrl)

    // Try rss2json first
    const rss2jsonUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`
    console.log("[v0] Using RSS2JSON API:", rss2jsonUrl)

    const response = await fetch(rss2jsonUrl, {
      headers: {
        Accept: "application/json",
      },
    })

    console.log("[v0] RSS2JSON response status:", response.status)

    if (!response.ok) {
      throw new Error(`RSS2JSON API returned status ${response.status}`)
    }

    const data = await response.json()
    console.log("[v0] RSS2JSON data status:", data.status)
    console.log("[v0] Number of posts received:", data.items?.length || 0)

    if (data.status === "ok" && data.items) {
      return Response.json({
        success: true,
        posts: data.items,
      })
    } else {
      throw new Error(data.message || "Failed to fetch blog posts")
    }
  } catch (error) {
    console.error("[v0] Error fetching blog posts:", error)
    return Response.json(
      {
        success: false,
        error: error.message || "Failed to fetch blog posts",
        details: "Unable to load Medium posts. Please check the Medium username or try again later.",
      },
      { status: 500 },
    )
  }
}
