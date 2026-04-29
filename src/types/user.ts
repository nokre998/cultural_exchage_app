export interface User {
  id: string
  first_name: string
  last_name: string
  email: string
  country: string
  bio: string
  avatar_url?: string
}

export interface UserCreate {
  first_name: string
  last_name: string
  email: string
  country_id: string
  bio: string
  password: string
  confirm_password: string
}
