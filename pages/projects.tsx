import React from 'react'
import MainLayout from '../layouts/MainLayout'
import Card from '../components/Card'
import Button from '../components/Button'

const projects = [
  {
    img: './images/portfolio.jpg',
    title: 'Personal Portfolio',
    // body: 'Portfolio - FreeCodeCamp',
    codeUrl: 'https://codesandbox.io/s/personal-portfolio-764y8',
    demoUrl: 'https://764y8.csb.app/',
  },
  {
    img: './images/omnifood.jpg',
    title: 'Food App',
    // body: 'Omnifood is a food app delivery service.',
    codeUrl: 'https://github.com/ninaokumura/omnifood',
    demoUrl: 'https://omnifood-nina.netlify.app/',
  },
  {
    img: './images/guess-number.jpg',
    title: 'Guess the Number game',
    // body: 'Guess the number between 1 and 20',
    codeUrl: 'https://github.com/ninaokumura/guess-the-number',
    demoUrl: 'https://ninaokumura.github.io/guess-the-number/',
  },
  {
    img: './images/forkify.jpg',
    title: 'Forkify',
    // body: 'Recipe app',
    codeUrl: 'https://github.com/ninaokumura/forkify-app',
    demoUrl: 'https://forkify-nina.netlify.app/',
  },
  {
    img: './images/personal-blog.jpg',
    title: 'Personal blog',
    // body: 'First project built as part of Bootcamp',
    codeUrl: 'https://github.com/ninaokumura/ninaokumura.github.io',
    demoUrl: 'https://ninaokumura.github.io/',
  },
  {
    img: './images/blog.jpg',
    title: 'Brogui',
    // body: 'Just a blog.',
    codeUrl: 'https://github.com/ninaokumura/brogui',
    demoUrl: 'https://brogui.herokuapp.com/',
  },
  {
    img: './images/natours.jpg',
    title: 'Natours',
    // body: 'Travel ecommerce app',
    codeUrl: 'https://github.com/ninaokumura/brogui',
    demoUrl: 'https://brogui.herokuapp.com/',
  },
  {
    img: './images/calculator.jpg',
    title: 'Calculator',
    // body: 'Calculator buil with React',
    codeUrl: 'https://github.com/ninaokumura/react-calculator',
    demoUrl: 'https://ninaokumura.github.io/react-calculator/',
  },
  {
    img: './images/crown.jpg',
    title: 'Crown clothing',
    // body: 'E-commerce app built using React',
    codeUrl: 'https://github.com/ninaokumura/react-crown-clothing',
    demoUrl: 'https://crown-clothing-42.herokuapp.com/',
  },
]

export default function Projects() {
  return (
    <MainLayout title="projects">
      <section className="grid w-full gap-8">
        <header className="text-center">
          <h1 className="inline-block bg-brush px-8 text-3xl text-beige ">
            My Projects
          </h1>
        </header>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((el) => (
            <Card>
              <Card.Img src={el.img} />
              <Card.Body>
                <Card.Title>{el.title}</Card.Title>
                {/* <Card.Text>{el.body}</Card.Text> */}
              </Card.Body>
              <div className="flex w-full gap-2">
                <Button className="flex-1">
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    className="projects-btn"
                    href={el.codeUrl}
                  >
                    Code
                  </a>
                </Button>
                <Button className="flex-1">
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    className="projects-btn"
                    href={el.demoUrl}
                  >
                    Demo
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </MainLayout>
  )
}
