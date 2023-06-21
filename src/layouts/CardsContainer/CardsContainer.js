import './cardsContainer.css'

const StatisticsCards = ({ children, title, type }) => {
  return (
    <div className='cardsContainerMain'>
      <h2 className='cardsContainerTitle'>{title}</h2>
      <div className={`cardsContainer ${type}`}>{children}</div>
    </div>
  )
}
export default StatisticsCards
