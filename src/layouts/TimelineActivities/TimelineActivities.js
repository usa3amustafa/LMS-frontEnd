import TimelineActivity from '../../components/TimelineActivity/TimelineActivity'
import timelineActivitiesData from '../../data/timelineActivitiesData'

import './timelineActivities.css'

const TimelineActivities = () => {
  return (
    <div className='timelineActivities'>
      {timelineActivitiesData.map(t => (
        <TimelineActivity
          id={t.id}
          title={t.title}
          time={t.timeStamp}
          desc={t.desc}
        />
      ))}
    </div>
  )
}
export default TimelineActivities
