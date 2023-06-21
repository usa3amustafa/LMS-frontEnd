import quickLinksIcons from '../../data/quickLinksData'
import CardsContainer from '../../layouts/CardsContainer/CardsContainer'
import AppBtn from '../../components/AppBtn/AppBtn'

const QuickLinks = () => {
  return (
    <CardsContainer title='Quick Links' hasPadding={true}>
      {quickLinksIcons.map((icon, i) => (
        <AppBtn key={i} appIcon={icon} />
      ))}
    </CardsContainer>
  )
}
export default QuickLinks
