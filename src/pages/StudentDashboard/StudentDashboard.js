import Navbar from '../../components/Navbar/Navbar'
import './studentDashboard.css'
import RecentCoursesCards from '../../layouts/RecentCoursesCards/RecentCoursesCards'
import StatisticsCards from '../../layouts/StatisticsCards/StatisticsCards'
import QuickLinks from '../../layouts/QuickLinks/QuickLinks'
import RecentFiles from '../../layouts/RecentFiles/RecentFiles'
import UserTimeLine from '../../components/UserTimeLine/UserTimeLine'

const StudentDashboard = () => {
  return (
    <>
      <Navbar />
      <div className='container studentDashboardMain'>
        <div className='studentDashboardLeftCol'>
          <QuickLinks />
          <StatisticsCards />
          <RecentCoursesCards />
        </div>
        <div className='studentDashboardRightCol'>
          <RecentFiles />
          <UserTimeLine />
        </div>
      </div>
    </>
  )
}
export default StudentDashboard
