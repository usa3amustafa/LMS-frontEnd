import googleIcon from '../../assets/icons/google.svg'
import appleIcon from '../../assets/icons/apple.svg'
import azureIcon from '../../assets/icons/azure.svg'
import './unlock.css'
import KnakLogo from '../../components/KnakLogo/KnakLogo'

const Unlock = () => {
  return (
    <div className='unlockMain'>
      <div className='container unlock'>
        <div className='unlockForm'>
          <p className='formEl'>
            <input type='email' name='email' id='email' placeholder='EMAIL' />
          </p>
          <p className='formEl'>
            <input
              type='password'
              name='password'
              id='password'
              placeholder='PASSWORD'
            />
          </p>

          <div className='unlockBtns'>
            <button className='unlockBtn'>
              <img src={googleIcon} alt='' className='unlockBtnIcon' />
            </button>
            <button className='unlockBtn'>
              <img src={appleIcon} alt='' className='unlockBtnIcon' />
            </button>
            <button className='unlockBtn'>
              <img src={azureIcon} alt='' className='unlockBtnIcon' />
            </button>
          </div>
        </div>
        <KnakLogo />
      </div>
    </div>
  )
}
export default Unlock
