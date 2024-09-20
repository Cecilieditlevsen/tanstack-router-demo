import { createFileRoute } from '@tanstack/react-router'
import { recipes } from '../../../constants/recipes.ts'
import { RecipeId } from './-recipe-view.tsx'

export const Route = createFileRoute('/recipes/$recipeId/')({
  loader: async ({ params }) => {
    const recipeId = params.recipeId
    const recipe = recipes.find((recipe) => recipe.id === recipeId)
    if (!recipe) {
      throw new Response('Not Found', { status: 404 })
    }
    return { recipe }
  },
  component: RecipeId,
})
