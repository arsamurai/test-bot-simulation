import { RouterProvider as TanstackRouterProvider } from '@tanstack/react-router'

import { router } from './router'

export const RouterProvider = () => <TanstackRouterProvider router={router} />
