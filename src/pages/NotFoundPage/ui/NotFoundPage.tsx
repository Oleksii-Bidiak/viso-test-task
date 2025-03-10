import { RoutePaths } from '@/shared/config/routeConfig'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const timeout = setTimeout(() => navigate(`${RoutePaths.search}`), 5000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="h-full flex justify-center items-center">
      <h1>NotFoundPage</h1>
    </div>
  )
}

export default NotFoundPage
