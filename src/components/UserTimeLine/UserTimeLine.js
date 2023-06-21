import Card from '../../layouts/Card/Card'
import Dates from '../../layouts/Dates/Dates'
import TimelineActivities from '../../layouts/TimelineActivities/TimelineActivities'
import './userTimeLine.css'

const UserTimeLine = () => {
  return (
    // card should have title too
    <Card type='borderedCard' stretched={true} title='Today, Classes'>
      <div className='userTimeLine'>
        <Dates />
        <div className='seperatorBar'>
          <div className='whiteBar'></div>
          <div className='blueBar'></div>
          <div className='whiteBar'></div>
        </div>
        <TimelineActivities />
      </div>
    </Card>
  )
}
export default UserTimeLine
