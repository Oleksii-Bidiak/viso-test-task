import { RoutePaths } from '@/shared/config/routeConfig'
import { Link, useLocation } from 'react-router-dom'

export const Header = () => {
  const location = useLocation()

  return (
    <header className="bg-white shadow-md p-4 mb-4">
      <nav className="flex justify-between items-center">
        <Link to={RoutePaths.search} className="text-xl font-bold">
          🍴 Recipe App
        </Link>
        <ul className="flex gap-4">
          <li>
            <Link
              to={RoutePaths.search}
              className={`hover:text-blue-500 ${location.pathname === RoutePaths.search ? 'text-blue-500 font-semibold' : ''}`}>
              Search
            </Link>
          </li>
          <li>
            <Link
              to={RoutePaths.favorite_recipes}
              className={`hover:text-blue-500 ${location.pathname === RoutePaths.favorite_recipes ? 'text-blue-500 font-semibold' : ''}`}>
              Favorite Recipes
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
