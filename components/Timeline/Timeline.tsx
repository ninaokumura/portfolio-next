import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { FaStar } from 'react-icons/fa'
// Define the type for an individual footer icon
interface FooterIcon {
  id: string // Matches the keys in the `icons` object
  url: string
}

// Define the type for an individual timeline item
interface TimelineItem {
  timelineIconId: string // Matches the keys in the `icons` object
  title: string
  subtitle: string
  duration: string
  footerIcons: FooterIcon[]
}

// Icons mapping with TypeScript
interface Icons {
  [key: string]: React.ComponentType<{ className?: string }>
}

// Refactor Timeline to accept data and icons as props
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
            return null // Skip rendering if icon is invalid
          }

          return (
            <VerticalTimelineElement
              key={item.title}
              textClassName="bg-almond  shadow-2xl border-2"
              contentArrowStyle={{ display: 'none' }}
              iconClassName="bg-[#A09BE7] text-[#fffffe] dark:bg-[#7f5af0] dark:text-[#fffffe]"
              contentStyle={{
                borderRadius: '12px',
                border: 'none',
                background: '##72757e', // Semi-transparent white
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', // Optional: Adds depth
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
                  if (!Icon) {
                    console.error(`Icon for ${icon.id} not found!`)
                    return null
                  }
                  return (
                    <span key={icon.id} className="text-2xl">
                      <a href={icon.url}>
                        <Icon className="bg-white dark:bg-black dark:text-black dark:invert dark:invert" />
                      </a>
                    </span>
                  )
                })}
              </div>
            </VerticalTimelineElement>
          )
        })}
        <VerticalTimelineElement
          iconClassName=" text-teal dark:text-terracota opacity-1 bg-[#A09BE7] border-2 border-red"
          icon={<FaStar color="#fffffe" />}
        />
      </VerticalTimeline>
    </div>
  )
}

export default Timeline
