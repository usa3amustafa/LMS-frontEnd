import Card from '../../layouts/Card/Card'
import './date.css'

const Date = ({ date, day, classes }) => {
  return (
    <div>
      <Card type='dateCard'>
        <p className='date'>{date}</p>
        <p className='day'>{day}</p>
      </Card>
      <div className='classesDots'>
        {classes.map(c => (
          <div className='classDot'></div>
        ))}
      </div>
    </div>
  )
}
export default Date
