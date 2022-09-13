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
      <h1>{post.meta.title}</h1>
      <MDXRemote {...post.source} components={{ YouTube, Image }} />
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
