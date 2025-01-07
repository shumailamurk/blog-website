import Link from "next/link";

export default function LatestBlog({ post }: { post: any }) {
  const blogPosts = [
    {
      id: 1,
      slug: "unlocking-secrets-vitamin-c",
      date: "21 Sept,2020",
      title: "Unlocking the Secrets of Vitamin C: All You Need",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      imgSrc: "/blog1.png.jpg",
    },
    {
      id: 2,
      slug: "essential-role-of-vegetables",
      date: "21 November,2020",
      title: "The Essential Role of Vegetables in a Healthy Diet",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      imgSrc: "/blog3.pnj.webp",
    },
    {
      id: 3,
      slug: "importance-of-exercise",
      date: "21 August,2020",
      title: "The Importance of Exercise for a Healthy Lifestyle",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      imgSrc: "/blog4.png.webp",
    },
    {
      id: 4,
      slug: "stay-fit-in-2025",
      date: "15 September,2020",
      title: "How to Stay Fit in 2025",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      imgSrc: "/blog5.png.jpg",
    },
    {
      id: 5,
      slug: "power-of-fruits",
      date: "30 October,2020",
      title: "The Power of Fruits: A Key to Better Health",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      imgSrc: "/blog2.pnj.webp",
    },
    {
      id: 6,
      slug: "fitness-tips-for-busy-people",
      date: "10 November,2020",
      title: "Fitness Tips for Busy People",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      imgSrc: "/blog6.png.jpeg",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-center text-3xl font-bold text-yellow-600 mb-8">
        Latest Blog
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-md shadow-lg p-4 border-2 border-yellow-500"
            style={{ width: "300px", height: "420px" }}
          >
            <img
              src={post.imgSrc}
              alt={post.title}
              className="h-40 w-full object-cover rounded-md"
            />
            <div className="mt-4">
              <div className="text-sm text-gray-500 flex items-center gap-2">
                <span>{post.date}</span>
              </div>
              <h2 className="text-lg font-semibold text-gray-800 mt-2">
                {post.title}
              </h2>
              <p className="text-sm text-gray-600 mt-2">{post.summary}</p>
              <Link
                href={`/blog/${post.slug}`} // Corrected template literal
                className="text-blue-500 underline mt-4"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
