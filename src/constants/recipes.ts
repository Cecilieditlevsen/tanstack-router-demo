export interface Recipe {
  id: string
  title: string
  image: string
  time: string
  servings: number
}

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Spaghetti Carbonara',
    image:
      'https://images.unsplash.com/photo-1588013273468-315fd88ea34c?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    time: '30 min',
    servings: 4,
  },
  {
    id: '2',
    title: 'Vegetable Stir Fry',
    image:
      'https://images.unsplash.com/photo-1608393189287-0bc2191c7e86?q=80&w=335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    time: '20 min',
    servings: 3,
  },
  {
    id: '3',
    title: 'Chicken Curry',
    image:
      'https://plus.unsplash.com/premium_photo-1661780307431-c21fd96e4129?q=80&w=335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    time: '45 min',
    servings: 4,
  },
  {
    id: '4',
    title: 'Caesar Salad',
    image:
      'https://images.unsplash.com/photo-1547496502-affa22d38842?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    time: '15 min',
    servings: 2,
  },
  {
    id: '5',
    title: 'Beef Tacos',
    image:
      'https://images.unsplash.com/photo-1619221882161-95135fca04e4?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    time: '25 min',
    servings: 4,
  },
  {
    id: '6',
    title: 'Mushroom Risotto',
    image:
      'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    time: '40 min',
    servings: 3,
  },
]
