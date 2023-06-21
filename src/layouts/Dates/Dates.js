import Date from '../../components/Date/Date'
import CardsContainer from '../CardsContainer/CardsContainer'
import dates from '../../data/datesData'

const Dates = () => {
  return (
    <CardsContainer type='datesContainer'>
      {dates.map(d => (
        <Date id={d.id} date={d.date} day={d.day} classes={d.classes} />
      ))}
    </CardsContainer>
  )
}
export default Dates
