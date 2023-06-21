import './courseCard.css'

const CourseCard = ({ title, desc, bg }) => {
  return (
    <div className='courseCard' style={{ backgroundImage: `url(${bg})` }}>
      <div className='courseInfo'>
        <h2 className='courseTitle'>{title}</h2>
        <p className='courseDesc'>{desc}</p>

        <div className='courseStats'>
          <div className='studentsJoined'></div>
        </div>
      </div>
    </div>
  )
}
export default CourseCard
