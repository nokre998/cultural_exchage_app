import { api } from "./api"
import type { HomeData } from "../types/home"

export const homeApi = {
  getHome: async (): Promise<HomeData> => {
    const res = await api.get("/api/home/home/1")

    return res.data
  },
}