import ArrowIcon from '../../assets/icons/left-arrow.svg'
import KnakLogo from '../../assets/icons/knak.svg'

import { Link } from 'react-router-dom'

import './login.css'

const Login = () => {
  return (
    <div className='container pos-rel h-full'>
      <div className='pos-abs bottom-5 w-100p grid grid-3-col items-center'>
        <div className='flex justify-start align-center'>
          <h2 className='schoolName'>School Name</h2>
        </div>
        <div className='flex justify-center align-center'>
          <Link to='/unlock' className='loginBtn'>
            <img src={ArrowIcon} alt='' />
          </Link>
        </div>
        <div className='flex justify-end align-center'>
          <img src={KnakLogo} alt='' srcset='' className='knakLogo' />
        </div>
      </div>
    </div>
  )
}
export default Login
