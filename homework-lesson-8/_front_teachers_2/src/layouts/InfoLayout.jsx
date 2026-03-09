import { Outlet } from 'react-router'
import GoHomeButton from '../components/GoHomeButton'

function InfoLayout() {
  return (
    <div>
      <h1>Інформація</h1>
      <div>
        <Outlet />
      </div>
      <GoHomeButton />
    </div>
  )
}

export default InfoLayout
