import logo from '../../assets/icons/knak.svg'
import userAvatar from '../../assets/navbar/userAvatar.png'
import middle from '../../assets/navbar/middle.png'
import search from '../../assets/navbar/search.png'
import alert from '../../assets/navbar/alert.png'
import home from '../../assets/navbar/home.png'
import './navbar.css'
import NavBtn from './NavBtn'

const navbarIcons = [middle, search, alert, home]

const Navbar = () => {
  return (
    <nav>
      <div className='container nav'>
        <div className='navLeftCol'>
          <div className='navLogo'>
            <img src={logo} alt='' className='navLogoImg' />
          </div>
          <div className='userInfo'>
            <div className='userAvatar'>
              <img src={userAvatar} alt='' className='userAvatarImg' />
            </div>

            <div className='userInfoText'>
              <p className='navbarWelcomeMessage'>
                Welcome Back <span className='userName'>John Wilson</span> 👋
              </p>
              <p className='navbarSchoolName'>School Name</p>
            </div>
          </div>
        </div>
        <div className='navRightCol'>
          {navbarIcons.map((icon, i) => (
            <NavBtn key={i} navBtnIcon={icon} />
          ))}
        </div>
      </div>
    </nav>
  )
}
export default Navbar
