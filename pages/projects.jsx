import React from 'react'
import MainLayout from '../layouts/MainLayout'
import Card from '../components/Card'
import Button from '../components/Button'
import projects from '../data/projects.data'

import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiMongodb, SiTailwindcss } from 'react-icons/si'
import { DiJavascript, DiCss3, DiHtml5 } from 'react-icons/di'

import { darken } from 'polished'

const icons = {
  react: FaReact,
  css: DiCss3,
  mongodb: SiMongodb,
  node: FaNodeJs,
  tailwind: SiTailwindcss,
  html: DiHtml5,
  javascript: DiJavascript,
}

const iconsColors = {
  react: darken(0.1, '#61DBFB'),
  html: '#e34f26',
  css: '#0098FF',
  tailwind: darken(0.2, '#8be9fd'),
  javascript: darken(0.15, '#F0DB4F'),
  mongodb: '#3FA037',
  node: '#215732',
}

export default function Projects() {
  return (
    <MainLayout title="projects">
      <section className="grid w-full gap-8 sm:p-8">
        <header className="">
          <h1 className="text-dark inline-block text-xl font-semibold sm:text-3xl"></h1>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((item) => (
            <Card key={item.title}>
              <Card.Img src={item.img} />

              <Card.Body>
                <Card.Title>{item.title}</Card.Title>

                <div className="flex items-center justify-center gap-2">
                  {item.techIconsId.map((icon) => {
                    const Icon = icons[icon.id]
                    const color = iconsColors[icon.id]

                    return (
                      <span
                        key={icon.id}
                        style={{ color: color }}
                        className="text-[26px]"
                      >
                        <Icon />
                      </span>
                    )
                  })}
                </div>
              </Card.Body>
              <div className="flex w-full gap-2">
                <Button className="flex-1">
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    className="projects-btn"
                    href={item.codeUrl}
                  >
                    Code
                  </a>
                </Button>
                <Button className="flex-1">
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    className="projects-btn"
                    href={item.demoUrl}
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
