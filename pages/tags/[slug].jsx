import Head from 'next/head'
import { getAllPosts } from '../../lib/blog-api'
import Articles from '../../components/Articles'
import MainLayout from '../../layouts/MainLayout'

export default function TagPage({ slug, posts }) {
  return (
    <MainLayout>
      <Head>
        <title>Tag: {slug}</title>
      </Head>
      <div className="h-full w-full">
        <h1 className="pb-8 text-2xl font-bold">Tag: {slug}</h1>
        <Articles blogposts={posts} />
      </div>
    </MainLayout>
  )
}

export const getStaticProps = async ({ params }) => {
  const posts = getAllPosts().filter((post) =>
    post.meta.tags.includes(params.slug)
  )

  return {
    props: {
      slug: params.slug,
      posts: posts.map((post) => post.meta),
    },
  }
}

export const getStaticPaths = async () => {
  const posts = getAllPosts()
  const tags = new Set(posts.map((post) => post.meta.tags).flat())
  const paths = Array.from(tags).map((tag) => ({
    params: { slug: tag },
  }))

  return {
    paths,
    fallback: false,
  }
}
