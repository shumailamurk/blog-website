'use client'
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import ReviewBox from "@/app/components/reviews"; // Adjust the path based on your folder structure

interface BlogPost {
  title: string;
  slug: string;
  summary: string;
  image: string;
}

// Fetch data for a single blog post using its slug
async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const query = groq`*[_type == "post" && slug.current == $slug][0]{
      title,
      "slug": slug.current,
      "summary": summary,
      "image": image.asset->url
    }`;

    // Fetch the post from the Sanity client
    const post = await client.fetch(query, { slug });

    console.log("Fetched Post:", post); // Debugging the fetched data
    return post || null; // If no post is found, return null
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null; // If fetch fails, return null
  }
}

export default async function BlogDetailPage({
  params,
}: {
  params: any;
}) {
  // Check if slug exists in params
  if (!params || !params.slug) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-red-500">Error: Missing slug parameter.</h1>
        <p className="text-gray-700">
          The slug parameter is missing or invalid.
        </p>
      </div>
    );
  }

  // Fetch the blog data based on the slug
  const blog = await getBlogPost(params.slug);

  // If blog is not found, display an error message
  if (!blog) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-red-500">Blog Not Found</h1>
        <p className="text-gray-700">
          The blog post you&apos;re looking for does not exist or has been removed.
        </p>
      </div>
    );
  }

  // If blog is found, display the blog details
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4 text-yellow-600">{blog.title}</h1>
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-auto mb-6 rounded-md"
      />
      <p className="text-gray-700 text-lg">{blog.summary}</p>

      {/* Add Review Box Below the Blog Content */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Leave a Review</h2>
        <ReviewBox />
      </div>
    </div>
  );
}
