import './recentFile.css'
import recentFileIcon from '../../assets/recentFiles/recentFileIcon.png'

const RecentFile = ({ title }) => {
  return (
    <div className='recentFile'>
      <img src={recentFileIcon} alt='' className='recentFileIconImg' />
      <p className='recentFileTitle'>{title}</p>
    </div>
  )
}
export default RecentFile
