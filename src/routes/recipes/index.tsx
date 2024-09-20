import { createFileRoute } from '@tanstack/react-router'
import FrontPage from './-recipes-view.tsx'
import { z } from 'zod'
import { fallback, zodSearchValidator } from '@tanstack/router-zod-adapter'

const productSearchSchema = z.object({
  mealType: fallback(z.string().array().optional(), undefined),
  query: fallback(z.string().optional(), undefined),
})

export const Route = createFileRoute('/recipes/')({
  validateSearch: zodSearchValidator(productSearchSchema),
  beforeLoad: () => {
    return {
      msg: 'hello',
    }
  },
  loader: ({ context }) => {
    return {
      msg: context.msg,
    }
  },
  component: () => <FrontPage />,
})
