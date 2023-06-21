import './appBtn.css'

const AppBtn = ({ appIcon }) => {
  return (
    <div className='appBtn'>
      <img src={appIcon} alt='' className='appBtnIcon' />
    </div>
  )
}
export default AppBtn
