import Head from 'next/head'
import Image from 'next/image'
import MainLayout from '../../layouts/MainLayout'
import { getPostFromSlug, getSlugs } from '../../lib/blog-api'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
import { serialize } from 'next-mdx-remote/serialize'
import YouTube from '../../components/YouTube'
import 'highlight.js/styles/atom-one-dark.css'

export default function BlogpostPage({ post }) {
  return (
    <MainLayout>
      <Head>
        <title>{post.meta.title}</title>
      </Head>
      <div className="flex h-full w-full max-w-xs flex-col gap-4 px-2 sm:min-w-full">
        <h1 className="text-2xl font-bold text-teal dark:text-orange-300">
          {post.meta.title}
        </h1>
        <MDXRemote {...post.source} components={{ YouTube, Image }} />
      </div>
    </MainLayout>
  )
}

export async function getStaticProps({ params }) {
  const { content, meta } = getPostFromSlug(params.slug)
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        rehypeHighlight,
      ],
    },
  })

  return {
    props: {
      post: { source: mdxSource, meta },
    },
  }
}

export async function getStaticPaths() {
  const paths = getSlugs().map((slug) => ({
    params: { slug },
  }))

  return {
    paths,
    fallback: false,
  }
}
