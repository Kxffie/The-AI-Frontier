import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { useState } from 'react';
import { Dice5 } from 'akar-icons';
import Head from 'next/head';

const Index = (props) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInput = (event) => {
    setSearchQuery(event.target.value);
  };


  const handleSearchSubmit = () => {
    let filteredPosts;
    if (searchQuery === '') {
      filteredPosts = props.posts.sort((a, b) => new Date(b.data.date) - new Date(a.data.date));
    } else {
      filteredPosts = props.posts.filter((post) =>
        post.data.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    return (
      <div>
        <Head>
          <title>AIDevBlog</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta content="AIDevBlog" property="og:title" />
          <meta content="Our blog covers the latest trends and developments in coding and AI. From programming languages to machine learning, we share insights and experiences on a wide range of topics. Whether you're a seasoned developer or just starting out, we hope you'll find our blog a valuable resource." property="og:description" />
          <meta content="https://aidevblog.vercel.app/" property="og:url" />
          <meta content="https://aidevblog.vercel.app/favicon.jpg" property="og:image" />
          <meta name="twitter:card" content="https://aidevblog.vercel.app/favicon.jpg"></meta>
          <meta content="#8B5CF6" data-react-helmet="true" name="theme-color" />
        </Head>
        <h1 className='px-2 py-1 my-2 text-lg font-semibold text-white rounded-md shadow-lg bg-violet-500'>{filteredPosts.length} Results • New Results</h1>
        {filteredPosts.map((post) => (
          <div key={post.slug} className="text-black" >
            <div className="container max-w-2xl px-10 py-6 mx-auto mb-3 bg-white rounded-lg shadow-xl ">
              <div className="flex items-center justify-between ">
                <span className="text-sm dark:text-gray-400">{post.data.date} • {post.data.readTime}</span>
                <span rel="noopener noreferrer" className="px-2 py-1 font-bold rounded">
                  {post.data.tags.map((tag) => (
                    <div key={post.slug.tag} className="hidden px-2 py-1 ml-1 text-sm font-semibold text-white rounded-md shadow-lg md:inline-block bg-violet-500">{tag}</div>
                  ))}
                </span>
              </div>
              <div className="mt-3">
                <Link rel="noopener noreferrer" href="/[slug]" as={`/${post.slug}`} className="text-2xl font-bold hover:underline">{post.data.title}</Link>
                <p className="mt-2 overflow-hidden line-clamp-3">{post.data.desc}</p>
              </div>
            </div>
          </div >
        ))}
      </div>
    );
  };

  const goToRandomPost = () => {
    const randomIndex = Math.floor(Math.random() * props.posts.length);

    const randomPostUrl = `/${props.posts[randomIndex].slug}`;

    window.location.assign(randomPostUrl);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <br />
      <div className="flex">
        <input type="text" placeholder="Search tags..." value={searchQuery} onChange={handleSearchInput} className="flex-grow h-10 px-5 pr-16 text-sm bg-white border-2 border-gray-300 rounded-lg focus:border-violet-500 focus:outline-none" />
        <button className='px-2 py-1 ml-2 text-lg font-semibold text-white rounded-md shadow-lg bg-violet-500' onClick={handleSearchSubmit}>Search</button>
        <button className='px-2 py-1 ml-2 text-lg font-semibold text-white rounded-md shadow-lg bg-violet-500' onClick={goToRandomPost}><Dice5 size={30} /></button>
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