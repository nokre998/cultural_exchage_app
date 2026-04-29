import { create } from "zustand"
import { homeApi } from "../api/homeApi"
import type { HomeData } from "../types/home"

interface HomeState {
  data: HomeData | null
  loading: boolean
  error: string | null
  fetchHome: () => Promise<void>
}

export const useHomeStore = create<HomeState>((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchHome: async () => {
    try {
      set({ loading: true, error: null })

      const data = await homeApi.getHome()

      set({ data, loading: false })
    } catch (e) {
      set({ error: "Ошибка загрузки", loading: false })
    }
  },
}))