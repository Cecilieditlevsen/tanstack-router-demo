import { useEffect, useState } from 'react'
import { Recipe, recipes } from '../../constants/recipes.ts'
import { Label } from '../../components/ui/label.tsx'
import { Input } from '../../components/ui/input.tsx'
import { Button } from '../../components/ui/button.tsx'
import { Link } from '@tanstack/react-router'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../components/ui/card.tsx'
import { Route } from './index.tsx'

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

export function MealPlanner() {
  const [numDays, setNumDays] = useState(7)
  const [mealPlan, setMealPlan] = useState<Recipe[]>([])

  const generateMealPlan = () => {
    const newMealPlan = Array(numDays)
      .fill(null)
      .map(() => recipes[Math.floor(Math.random() * recipes.length)])
    setMealPlan(newMealPlan)
  }

  useEffect(() => {
    generateMealPlan()
  }, [numDays])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Weekly Meal Planner</h1>

      <div className="mb-6 flex items-end gap-4">
        <div className="flex-grow">
          <Label htmlFor="numDays">Number of days (1-7)</Label>
          <Input
            id="numDays"
            type="number"
            min="1"
            max="7"
            value={numDays}
            onChange={(e) =>
              setNumDays(
                Math.min(7, Math.max(1, parseInt(e.target.value) || 1)),
              )
            }
            className="mt-1"
          />
        </div>
        <Button onClick={generateMealPlan}>Regenerate Meals</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {mealPlan.map((meal, index) => (
          <Link
            from={Route.fullPath}
            to={`/recipes/$recipeId`}
            params={{ recipeId: meal.id }}
          >
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{days[index]}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p>{meal.title}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
