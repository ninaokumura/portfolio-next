import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import { getAllPosts } from '../../lib/blog-api'
import Articles from '../../components/Articles'

export default function Blogposts(props) {
  return (
    <MainLayout>
      <Articles blogposts={props.blogposts} />
    </MainLayout>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts()

  const blogposts = posts.slice(0, 9).map((post) => post.meta)

  return {
    props: {
      blogposts,
    },
  }
}