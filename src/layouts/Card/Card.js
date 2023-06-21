import './card.css'

const Card = ({ children, title, type, stretched }) => {
  return (
    <div className={`card ${type} ${stretched && `stretched`}`}>
      {title && <h2 className='cardTitle'>{title}</h2>}
      {children}
    </div>
  )
}
export default Card
