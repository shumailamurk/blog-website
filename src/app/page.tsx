import React from 'react';
import { client } from '@/sanity/lib/client'; 
import LatestBlog from './blog/page';
import Main  from '../app/components/main';

const Page = async () => {
  // The updated query to fetch data from Sanity, including the image URL
  const query = `*[_type == "post"]{
  title,
  "slug": slug.current,
  "summary": summary,
  "image": image.asset->url 
}`;

  // Fetch the posts from Sanity
  const posts = await client.fetch(query);

  // If there are no posts, return null to prevent rendering errors
  if (!posts || posts.length === 0) {
    return <div>No posts found!</div>;
  }

  console.log(posts); // Check the data to make sure it's correct

  return (
    <div>
      <Main/>
      {/* Other components like Hero, Main */}
      <LatestBlog post={posts} /> {/* Passing fetched posts to LatestBlog */}
    </div>
  );
};

export default Page;
