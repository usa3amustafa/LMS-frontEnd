import coursesCardsData from '../../data/coursesCardsData'
import CardsContainer from '../../layouts/CardsContainer/CardsContainer'
import CourseCard from '../../components/CourseCard/CourseCard'

const RecentCoursesCards = () => {
  return (
    <CardsContainer title='Recently Added Courses' hasPadding={true}>
      {coursesCardsData.map(card => (
        <CourseCard
          id={card.id}
          title={card.title}
          desc={card.desc}
          bg={card.bg}
        />
      ))}
    </CardsContainer>
  )
}
export default RecentCoursesCards
