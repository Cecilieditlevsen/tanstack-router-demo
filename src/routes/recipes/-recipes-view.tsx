import React, { useState } from 'react'

import { Search, Clock, Users } from 'lucide-react'
import { Input } from '../../components/ui/input.tsx'
import { Button } from '../../components/ui/button.tsx'
import { Checkbox } from '../../components/ui/checkbox.tsx'
import { Label } from '../../components/ui/label.tsx'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../components/ui/card.tsx'
import { Link } from '@tanstack/react-router'
import { recipes } from '../../constants/recipes.ts'
import { Route } from './index.tsx'
import { useDebounceEffect } from 'ahooks'

export default function FrontPage() {
  const navigate = Route.useNavigate()
  const search = Route.useSearch()
  const loaderData = Route.useLoaderData()

  console.log(loaderData)

  const [searchTerm, setSearchTerm] = useState(search.query || '')

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  useDebounceEffect(
    () => {
      void navigate({
        to: '.',
        search: (prev) => ({ ...prev, query: searchTerm || undefined }),
      })
    },
    [searchTerm],
    { wait: 150 },
  )

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Recipe Finder</h1>
          <div className="flex">
            <Input
              type="search"
              placeholder="Search recipes..."
              value={searchTerm}
              onChange={handleSearch}
              className="flex-grow text-black"
            />

            <Button type="submit" className="ml-2">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-64 space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-2">Meal Type</h2>
              <div className="space-y-2">
                {['Breakfast', 'Lunch', 'Dinner', 'Snack'].map((meal) => (
                  <div key={meal} className="flex items-center">
                    <Checkbox id={`meal-${meal.toLowerCase()}`} />
                    <Label
                      htmlFor={`meal-${meal.toLowerCase()}`}
                      className="ml-2"
                    >
                      {meal}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Cuisine</h2>
              <div className="space-y-2">
                {['Italian', 'Mexican', 'Indian', 'Chinese', 'American'].map(
                  (cuisine) => (
                    <div key={cuisine} className="flex items-center">
                      <Checkbox id={`cuisine-${cuisine.toLowerCase()}`} />
                      <Label
                        htmlFor={`cuisine-${cuisine.toLowerCase()}`}
                        className="ml-2"
                      >
                        {cuisine}
                      </Label>
                    </div>
                  ),
                )}
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">
                Dietary Restrictions
              </h2>
              <div className="space-y-2">
                {['Vegetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free'].map(
                  (diet) => (
                    <div key={diet} className="flex items-center">
                      <Checkbox id={`diet-${diet.toLowerCase()}`} />
                      <Label
                        htmlFor={`diet-${diet.toLowerCase()}`}
                        className="ml-2"
                      >
                        {diet}
                      </Label>
                    </div>
                  ),
                )}
              </div>
            </div>
          </aside>

          <div className="flex-grow">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recipes.map((recipe) => (
                <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
                  <Card>
                    <CardHeader>
                      <CardTitle>{recipe.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="w-full h-48 object-cover rounded-md"
                      />
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{recipe.time}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        <span>{recipe.servings} servings</span>
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
