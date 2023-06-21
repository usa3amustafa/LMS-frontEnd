import statisticsCardsData from '../../data/statisticsCardsData'
import StatisticsCard from '../../components/StaticticsCard/StatisticsCard'
import CardsContainer from '../../layouts/CardsContainer/CardsContainer'

const StatisticsCards = () => {
  return (
    <CardsContainer title='Quick Statistics' hasPadding={true}>
      {statisticsCardsData.map(card => (
        <StatisticsCard
          id={card.id}
          icon={card.icon}
          title={card.title}
          score={card.score}
          total={card.total}
          range={card.range}
        />
      ))}
    </CardsContainer>
  )
}
export default StatisticsCards
