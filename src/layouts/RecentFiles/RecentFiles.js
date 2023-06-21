import Card from '../Card/Card'
import recentFilesData from '../../data/recentFilesData'
import RecentFile from '../../components/RecentFile/RecentFile'

const RecentFiles = () => {
  return (
    <Card type='borderedCard' title='Recent Files'>
      {recentFilesData.map(card => (
        <RecentFile
          id={card.id}
          title={card.title}
          desc={card.desc}
          bg={card.bg}
        />
      ))}
    </Card>
  )
}
export default RecentFiles
