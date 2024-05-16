export type Restaurant = {
  id: string
  name: string,
  description: string,
  pictureId: string,
  city: string
  rating: number
}

export interface Root {
  error: boolean
  message: string
  restaurant: RestaurantDetail
}

export interface RestaurantDetail {
  id: string
  name: string
  description: string
  city: string
  address: string
  pictureId: string
  categories: Category[]
  menus: Menus
  rating: number
  customerReviews: CustomerReview[]
}

export interface Category {
  name: string
}

export interface Menus {
  foods: Food[]
  drinks: Drink[]
}

export interface Food {
  name: string
}

export interface Drink {
  name: string
}

export interface CustomerReview {
  name: string
  review: string
  date: string
}
