import { Suspense, memo, useCallback } from 'react'
import { Route, RouteProps, Routes } from 'react-router-dom'
import { routeConfig } from '@/shared/config/routeConfig'
import { PageLoader } from '@/widgets/PageLoader'

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: RouteProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
    )

    return <Route key={route.path} path={route.path} element={element} />
  }, [])

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
}

export default memo(AppRouter)
