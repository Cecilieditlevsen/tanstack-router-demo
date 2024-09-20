import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card'
import { Input } from '../../../components/ui/input.tsx'
import { Label } from '../../../components/ui/label.tsx'
import { Button } from '../../../components/ui/button.tsx'
import { Textarea } from '../../../components/ui/textarea.tsx'
import { Toaster } from '../../../components/ui/toaster.tsx'
import { useToast } from '../../../hooks/use-toast.ts'
import { ArrowLeft } from 'lucide-react'

export const Route = createFileRoute('/recipes/$recipeId/edit-recipe')({
  component: RecipeEditor,
})

export default function RecipeEditor() {
  const { toast } = useToast()
  const navigate = Route.useNavigate()
  const [recipe, setRecipe] = useState({
    title: 'Spaghetti Carbonara',
    servings: 4,
    prepTime: 15,
    cookTime: 15,
    ingredients:
      '400g spaghetti\n200g pancetta\n4 large eggs\n100g Pecorino Romano\n100g Parmigiano-Reggiano\nBlack pepper\nSalt',
    instructions:
      '1. Boil pasta\n2. Cook pancetta\n3. Mix eggs and cheese\n4. Combine all ingredients',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setRecipe((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Submitting updated recipe:', recipe)

    // Simulate API call with 200ms delay
    setTimeout(() => {
      // Randomly decide if it's a success or error
      const isSuccess = Math.random() > 0.5

      if (isSuccess) {
        toast({
          title: 'Success!',
          description: 'Your recipe has been updated.',
          variant: 'default',
        })
      } else {
        toast({
          title: 'Error!',
          description: 'Failed to update the recipe. Please try again.',
          variant: 'destructive',
        })
      }
    }, 200)
  }

  const handleNavigateBack = () => {
    void navigate({ to: '..' })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="outline" onClick={handleNavigateBack} className="mb-4">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back
      </Button>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Edit Recipe</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="title">Recipe Title</Label>
              <Input
                id="title"
                name="title"
                value={recipe.title}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="servings">Servings</Label>
                <Input
                  id="servings"
                  name="servings"
                  type="number"
                  value={recipe.servings}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="prepTime">Prep Time (minutes)</Label>
                <Input
                  id="prepTime"
                  name="prepTime"
                  type="number"
                  value={recipe.prepTime}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="cookTime">Cook Time (minutes)</Label>
                <Input
                  id="cookTime"
                  name="cookTime"
                  type="number"
                  value={recipe.cookTime}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="ingredients">Ingredients (one per line)</Label>
              <Textarea
                id="ingredients"
                name="ingredients"
                value={recipe.ingredients}
                onChange={handleChange}
                rows={6}
                required
              />
            </div>
            <div>
              <Label htmlFor="instructions">
                Instructions (numbered steps, one per line)
              </Label>
              <Textarea
                id="instructions"
                name="instructions"
                value={recipe.instructions}
                onChange={handleChange}
                rows={6}
                required
              />
            </div>
            <Button type="submit" >Save Changes</Button>
          </form>
        </CardContent>
      </Card>
      <Toaster />
    </div>
  )
}
