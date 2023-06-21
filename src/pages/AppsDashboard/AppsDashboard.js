import AppBtn from '../../components/AppBtn/AppBtn'
import KnakLogo from '../../components/KnakLogo/KnakLogo'
import figmaIcon from '../../assets/icons/figma.svg'
import creativeCloudIcon from '../../assets/icons/creativeCloud.svg'
import googleDuoIcon from '../../assets/icons/googleDuo.svg'
import googleMeetIcon from '../../assets/icons/googleMeet.svg'
import photoshopIcon from '../../assets/icons/photoshop.svg'
import teamsIcon from '../../assets/icons/teams.svg'
import tempApp1Icon from '../../assets/icons/tempApp1.svg'
import tempApp2Icon from '../../assets/icons/tempApp2.svg'

import './appsDashboard.css'

const appsDashboardIcons = [
  figmaIcon,
  creativeCloudIcon,
  googleDuoIcon,
  googleMeetIcon,
  photoshopIcon,
  teamsIcon,
  tempApp1Icon,
  tempApp2Icon,
]

const AppsDashboard = () => {
  return (
    <div className='container appsDashboard'>
      <h2 className='appsDashboardTitle'>Access Plateforms</h2>
      <div className='appsDashboardBtns'>
        {appsDashboardIcons.map((icon, i) => (
          <AppBtn key={i} appIcon={icon} />
        ))}
      </div>

      <KnakLogo />
    </div>
  )
}
export default AppsDashboard
