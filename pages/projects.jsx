import React from 'react'
import MainLayout from '../layouts/MainLayout'
import Card from '../components/Card'
import Button from '../components/Button'
import projects from '../data/projects.data'

export default function Projects() {
  return (
    <MainLayout title="projects">
      <section className="grid w-full gap-8 p-8">
        <header className="text-center">
          <h1 className="inline-block bg-brush px-8 text-3xl text-beige ">
            My Projects
          </h1>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((el) => (
            <Card key={el.title}>
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
