import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { FaStar } from 'react-icons/fa'

interface FooterIcon {
  id: string
  url: string
}

interface TimelineItem {
  timelineIconId: string
  title: string
  subtitle: string
  duration: string
  footerIcons?: FooterIcon[]
}

interface Icons {
  [key: string]: React.ComponentType<{ className?: string }>
}

interface TimelineProps {
  timelineItems: TimelineItem[]
  icons: Icons
}

const Timeline: React.FC<TimelineProps> = ({ timelineItems, icons }) => {
  return (
    <div className="m-auto grid w-full py-8">
      <VerticalTimeline>
        {timelineItems.slice().map((item) => {
          const TimelineIcon = icons[item.timelineIconId]

          // Safeguard if TimelineIcon is undefined
          if (!TimelineIcon) {
            console.error(`Icon for ${item.timelineIconId} not found!`)
            return null
          }

          return (
            <VerticalTimelineElement
              key={item.title}
              textClassName="bg-almond  shadow-2xl border-2"
              contentArrowStyle={{ display: 'none' }}
              iconClassName="bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 text-[#fffffe] dark:bg-[#7f5af0] dark:text-[#fffffe]"
              contentStyle={{
                borderRadius: '12px',
                border: 'none',
                background: '##72757e',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
              }}
              icon={<TimelineIcon />}
            >
              <h3 className="text-md mb-4 text-center font-bold sm:text-xl">
                {item.title}
              </h3>

              <h4 className="text-center font-bold">{item.subtitle}</h4>
              <h4 className="mb-2 text-center">{item.duration}</h4>

              {/* Conditionally render footer icons */}
              {item.footerIcons && item.footerIcons.length > 0 && (
                <div className="flex justify-center gap-2 p-2">
                  {item.footerIcons.map((icon) => {
                    const Icon = icons[icon.id]
                    if (!Icon) {
                      console.error(`Icon for ${icon.id} not found!`)
                      return null
                    }
                    return (
                      <span key={icon.id} className="text-2xl">
                        <a href={icon.url}>
                          <Icon className="bg-white dark:bg-black dark:text-black dark:invert" />
                        </a>
                      </span>
                    )
                  })}
                </div>
              )}
            </VerticalTimelineElement>
          )
        })}
        <VerticalTimelineElement
          iconClassName=" text-teal dark:text-terracota opacity-1 bg-gradient-to-r from-pink-500 via-red-500 to-orange-500"
          icon={<FaStar color="#fffffe" />}
        />
      </VerticalTimeline>
    </div>
  )
}

export default Timeline
