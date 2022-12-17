import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Head from 'next/head';

const Index = (props) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInput = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    const filteredPosts = props.posts.filter((post) =>
      post.data.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return filteredPosts.map((post) => (
      <div key={post.slug} class="text-black">
        <Head>
          <title>The AI Frontier</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div class="container max-w-2xl mx-auto px-10 py-6 rounded-lg shadow-xl">
          <div class="flex items-center justify-between">
            <span class="text-sm dark:text-gray-400">{post.data.date} • {post.data.readTime}</span>
            <span rel="noopener noreferrer" class="px-2 py-1 font-bold rounded bg-violet-500">
              {post.data.tags.map((tag) => (
                <span key={post.slug.tag} class="inline-block px-2 py-1 text-sm font-semibold shadow-lg rounded-md text-white">{tag}</span>
              ))}
            </span>
          </div>
          <div class="mt-3">
            <Link rel="noopener noreferrer" href="/[slug]" as={`/${post.slug}`} class="text-2xl font-bold hover:underline">{post.data.title}</Link>
            <p class="mt-2 line-clamp-3 overflow-hidden">{post.data.desc}</p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <br />
      <div className="flex justify-between">
        <input type="text" placeholder="Search tags..." value={searchQuery} onChange={handleSearchInput} className="h-10 px-5 pr-16 text-sm bg-white border-2 border-gray-300 rounded-lg focus:border-violet-500 focus:outline-none" />
        <button className='px-2 py-1 text-lg font-semibold text-white rounded-md shadow-lg bg-violet-500' onClick={handleSearchSubmit}>Search</button>
      </div>
      {handleSearchSubmit()}
    </div>
  );
};


export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    return {
      slug: filename.replace('.md', ''),
      data,
      content,
    };
  });
  return {
    props: {
      posts,
    },
  };
}

export default Index;