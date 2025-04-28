import { createRouter } from '@tanstack/react-router'

import { routeTree } from './router-tree'

export const router = createRouter({
  routeTree,
  context: {},
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
})
