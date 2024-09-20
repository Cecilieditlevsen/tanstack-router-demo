import { createFileRoute } from '@tanstack/react-router'
import { MealPlanner } from './-meal-planner-view.tsx'

export const Route = createFileRoute('/meal-planner/')({
  component: () => <MealPlanner />,
})
