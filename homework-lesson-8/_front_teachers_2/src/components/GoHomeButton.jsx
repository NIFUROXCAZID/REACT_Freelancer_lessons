import { useNavigate } from 'react-router'
import frontRoutes from '../routes/frontRoutes'

function GoHomeButton() {
  const navigate = useNavigate()
  return (
    <button className='go-home' onClick={() => navigate(frontRoutes.navigate.home)}>Go home</button>
  )
}

export default GoHomeButton
