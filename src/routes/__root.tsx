import * as React from 'react'
import { Outlet, createRootRoute, Link } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <React.Fragment>
      <header
        className={
          'bg-primary text-primary-foreground py-6 border-b border-primary-foreground px-4 flex items-center gap-5'
        }
      >
        <Link to="/recipes" className={'hover:underline'}>
          Recipes
        </Link>
        <Link to="/meal-planner" className={'hover:underline'}>
          Meal Planner
        </Link>
      </header>
      <Outlet />
      <TanStackRouterDevtools />
    </React.Fragment>
  ),
})
