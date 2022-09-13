import Card from './Card'
import Link from 'next/link'

export default function Articles(props) {
  return (
    <ul className="flex gap-6">
      {props.blogposts.map((post) => (
        <Card>
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <a>
                <h1>{post.title}</h1>
              </a>
            </Link>
            <p>{post.excerpt}</p>
            <p>{post.tags}</p>
          </li>
        </Card>
      ))}
    </ul>
  )
}
