import './statisticsCard.css'

const StatisticsCard = ({ icon, title, score, total, range }) => {
  return (
    <div className='statisticsCard'>
      <div className='cardIcon'>
        <img src={icon} alt='' className='cardIconImg' />
      </div>

      <h2 className='statisticsCardTitle'>{title}</h2>

      <p className='statisticsCardScores'>
        <span className='score'>{score}</span>&nbsp;-&nbsp;
        <span className='total'>{total}</span>
      </p>

      <div className='range'>
        <img src={range} alt='' className='rangeImg' />
      </div>
    </div>
  )
}
export default StatisticsCard
