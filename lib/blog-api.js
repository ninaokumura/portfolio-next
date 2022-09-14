import path from 'path'
import fs from 'fs'
import { sync } from 'glob'
import matter from 'gray-matter'

const BLOGPOSTS_PATH = path.join(process.cwd(), 'blogposts')

export const getSlugs = () => {
  const paths = sync(`${BLOGPOSTS_PATH}/*.mdx`)

  return paths.map((path) => {
    const parts = path.split('/')
    const fileName = parts[parts.length - 1]
    const [slug, _ext] = fileName.split('.')
    return slug
  })
}

export const getAllPosts = () => {
  const blogposts = getSlugs()
    .map((slug) => getPostFromSlug(slug))
    .sort((a, b) => {
      if (a.meta.date > b.meta.date) {
        return 1
      }
      if (a.meta.date < b.meta.date) {
        return -1
      }
    })
    .reverse()
  return blogposts
}

export const getPostFromSlug = (slug) => {
  const blogpostPath = path.join(BLOGPOSTS_PATH, `${slug}.mdx`)

  // read the content
  const source = fs.readFileSync(blogpostPath)
  const { content, data } = matter(source)

  return {
    content,
    meta: {
      slug,
      excerpt: data.excerpt ?? 'slug',
      title: data.title ?? 'slug',
      tags: (data.tags ?? []).sort(),
      date: (data.date ?? new Date()).toString(),
    },
  }
}
