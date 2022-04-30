import Head from 'next/head'
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import { sanityClient, urlFor } from "../sanity";
import { Post } from "../typings";
import Posts from "../components/Posts";

interface Props { 
  posts: [Post];
}

const Home = ({ posts }: Props) => {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>MediumPlus</title>
        <link rel="icon" href="/medium.png" />
      </Head>

      <Header />
      <HeroSection />
      <Posts posts={posts} />
    </div>
  )
}

export default Home;

export const getServerSideProps = async() => {
  const query = `*[_type == "post"]{
    _id,
    title,
    author -> {
    name,
    image
  },
    description,
    mainImage,
    slug
  }`;

  const posts = await sanityClient.fetch(query);

  return { 
    props: {
      posts,
    },
  };
};
