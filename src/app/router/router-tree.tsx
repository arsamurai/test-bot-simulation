import { ChatPage } from '@pages'
import { Outlet, createRootRoute, createRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import { RootLayout } from '@features/layouts'

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})

const rootLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: 'root-layout',
  component: RootLayout,
})

const indexRoute = createRoute({
  getParentRoute: () => rootLayoutRoute,
  path: '/',
  component: ChatPage,
})

export const routeTree = rootRoute.addChildren([rootLayoutRoute.addChildren([indexRoute])])
