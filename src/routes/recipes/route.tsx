import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/recipes')({
  beforeLoad: () => {
    return {
      routerMessage: 'hello',
    }
  },
  component: () => (
    <div className={''}>
      <Outlet />
    </div>
  ),
})
