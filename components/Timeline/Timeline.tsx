import { timelineItems } from './Timeline.data'

import {
  VerticalTimeline,
  VerticalTimelineElement,
  // @ts-ignore
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

// Icons
import {
  FaNodeJs,
  FaReact,
  FaHtml5,
  FaFreeCodeCamp,
  FaGraduationCap,
  FaStar,
  FaGithub,
} from 'react-icons/fa'
import { SiJavascript, SiMongodb } from 'react-icons/si'
import { GrCertificate } from 'react-icons/gr'
import { IconType } from 'react-icons'

const icons: Record<string, IconType> = {
  react: FaReact,
  certificate: GrCertificate,
  mongodb: SiMongodb,
  node: FaNodeJs,
  github: FaGithub,
  graduation: FaGraduationCap,
  html: FaHtml5,
  javascript: SiJavascript,
  freecodecamp: FaFreeCodeCamp,
}

const timeline = timelineItems.slice().reverse()

export default function Timeline() {
  return (
    <div className="grid w-full gap-4">
      <VerticalTimeline>
        {timeline.map((item) => {
          const TimelineIcon = icons[item.timelineIconId]
          return (
            <VerticalTimelineElement
              key={item.title}
              date={item.duration}
              iconStyle={{ background: '#f45d48', color: 'whiteSmoke' }}
              icon={<TimelineIcon />}
            >
              <h3 className="text-center text-xl font-bold">{item.title}</h3>
              <p className="pb-4 text-center">{item.subtitle}</p>
              <div className="flex justify-center gap-2 p-2">
                {item.footerIcons.map((icon) => {
                  const Icon = icons[icon.id]
                  return (
                    <span key={icon.id} className="text-2xl">
                      <a href={icon.url}>
                        <Icon />
                      </a>
                    </span>
                  )
                })}
              </div>
            </VerticalTimelineElement>
          )
        })}
        <VerticalTimelineElement
          iconStyle={{ background: '#f45d48', color: 'whiteSmoke' }}
          icon={<FaStar />}
        />
      </VerticalTimeline>
    </div>
  )
}
