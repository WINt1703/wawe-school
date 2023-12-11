export interface Gallery {
  currentCategory: string
  categories: Category[]
}

export interface Category {
  name: string
  photos: string[]
}
