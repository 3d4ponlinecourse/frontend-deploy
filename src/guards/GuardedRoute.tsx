import { Navigate, Outlet } from 'react-router-dom'
import React from 'react'

interface IGuardedRouteProps {
  isRouteAccessible: boolean
  redirectRoute: string
}

const GuardedRoute = (props: IGuardedRouteProps) => {
  const { isRouteAccessible, redirectRoute } = props

  return isRouteAccessible ? <Outlet /> : <Navigate to={redirectRoute} replace />
}

export default GuardedRoute
