import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '../../../components/ui/breadcrumb.tsx'
import { ChevronRight } from 'lucide-react'
import { Button } from '../../../components/ui/button.tsx'
import { Card, CardContent } from '../../../components/ui/card.tsx'
import { Route } from './index.tsx'

export function RecipeId() {
  const { recipe } = Route.useLoaderData()
  const navigate = Route.useNavigate()

  const handleEditClick = () => {
    void navigate({ to: './edit-recipe' })
    console.log('Edit button clicked')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/recipes">Recipes</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronRight className="h-4 w-4" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/recipes/spaghetti-carbonara">
              {recipe.title}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">{recipe.title}</h1>
        <Button onClick={handleEditClick}>Edit Recipe</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={recipe.image}
            alt="Spaghetti Carbonara"
            width={600}
            height={400}
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>

        <div>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">
                Recipe Information
              </h2>
              <ul className="space-y-2">
                <li>
                  <strong>Servings:</strong> 4
                </li>
                <li>
                  <strong>Prep Time:</strong> 15 minutes
                </li>
                <li>
                  <strong>Cook Time:</strong> 15 minutes
                </li>
                <li>
                  <strong>Total Time:</strong> 30 minutes
                </li>
                <li>
                  <strong>Difficulty:</strong> Medium
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>400g spaghetti</li>
              <li>200g pancetta or guanciale, diced</li>
              <li>4 large eggs</li>
              <li>100g Pecorino Romano cheese, grated</li>
              <li>100g Parmigiano-Reggiano cheese, grated</li>
              <li>Freshly ground black pepper</li>
              <li>Salt, for pasta water</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Bring a large pot of salted water to boil for the pasta.</li>
              <li>
                In a large skillet, cook the pancetta over medium heat until
                crispy, about 5-7 minutes. Remove from heat and set aside.
              </li>
              <li>
                In a bowl, whisk together the eggs, grated cheeses, and a
                generous amount of black pepper.
              </li>
              <li>
                Cook the spaghetti in the boiling water until al dente. Reserve
                1 cup of pasta water before draining.
              </li>
              <li>
                Return the skillet with pancetta to medium heat. Add the drained
                pasta and toss to combine.
              </li>
              <li>
                Remove the skillet from heat and quickly stir in the egg and
                cheese mixture, tossing constantly to create a creamy sauce. Add
                pasta water as needed for consistency.
              </li>
              <li>
                Serve immediately with extra grated cheese and black pepper on
                top.
              </li>
            </ol>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
