import React from 'react'
import Card from './Card'
import Link from 'next/link'

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  tags: string[]
}

interface ArticlesProps {
  blogposts: BlogPost[]
}

const Articles: React.FC<ArticlesProps> = ({ blogposts }) => {
  return (
    <ul className="flex flex-col gap-10">
      {blogposts.map((post) => (
        <li key={post.slug} className="flex flex-col gap-2">
          <Link href={`/blog/${post.slug}`}>
            <a>
              <h1 className="text-xl font-bold text-teal dark:text-orange-300">
                {post.title}
              </h1>
            </a>
          </Link>
          <p className="sm:text-lg">{post.excerpt}</p>
          <div className="flex gap-4">
            {post.tags.map((tag) => (
              <Link key={tag} href={`/tags/${tag}`}>
                <a>
                  <p className="text-xs font-semibold text-terracota dark:text-orange-300">
                    {tag}
                  </p>
                </a>
              </Link>
            ))}
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Articles
