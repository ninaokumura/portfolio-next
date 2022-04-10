import {
  VerticalTimeline,
  VerticalTimelineElement,
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
import { GrCertificate, GrCodeSandbox } from 'react-icons/gr'

import { timelineItems } from './Timeline.data'

const icons = {
  react: FaReact,
  certificate: GrCertificate,
  mongodb: SiMongodb,
  node: FaNodeJs,
  github: FaGithub,
  graduation: FaGraduationCap,
  html: FaHtml5,
  javascript: SiJavascript,
  freecodecamp: FaFreeCodeCamp,
  sandbox: GrCodeSandbox,
}

const timeline = timelineItems.slice().reverse()

export default function Timeline() {
  return (
    <div className="m-auto grid w-full py-8 ">
      <VerticalTimeline>
        {timeline.map((item) => {
          const TimelineIcon = icons[item.timelineIconId]
          return (
            <VerticalTimelineElement
              key={item.title}
              date={item.duration}
              iconStyle={{
                background: '#399999',
                color: 'whiteSmoke',
              }}
              icon={<TimelineIcon />}
            >
              <h3 className="text-md text-center font-bold sm:text-xl">
                {item.title}
              </h3>
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
          iconStyle={{
            background: '#fff',
            color: '#078080',
            opacity: 1,
          }}
          icon={<FaStar />}
        />
      </VerticalTimeline>
    </div>
  )
}
