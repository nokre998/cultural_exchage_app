import { apiClient } from "./axios"

// 🔥 LOGIN DTO
export interface LoginRequest {
  email: string
  password: string
}

// 🔥 REGISTER DTO (если оставляешь auth-based register)
export interface RegisterRequest {
  name: string
  email: string
  password: string
}

export interface AuthResponse {
  access_token: string
  token_type: string
}


export const login = async (
  data: LoginRequest
): Promise<AuthResponse> => {
  const response = await apiClient.post(
    "/users/login",
    data
  )
  return response.data
}


export const register = async (
  data: RegisterRequest
) => {
  const response = await apiClient.post(
    "/users/register",
    data
  )
  return response.data
}