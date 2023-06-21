import './timelineActivity.css'

const TimelineActivity = ({ title, time, desc }) => {
  return (
    <div className='timelineActivity'>
      <div className='timestamp'>
        <div className='time'>{time}</div>
        <div className='whiteBar'></div>
      </div>

      <div className='timelineActivityInfo'>
        <h2 className='timelineActivityTitle'>{title}</h2>

        <p className='timelineActivityDesc'>{desc}</p>
      </div>
    </div>
  )
}
export default TimelineActivity
