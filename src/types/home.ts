export interface Culture {
  id: number
  name: string
  country_name: string
  image_url: string
}

export interface HomeStats {
  active_members: number
  upcoming_events: number
  active_exchanges: number
}

export interface HomeEvent {
  id: number
  title: string
  description: string
  event_date: string
  location: string
  status: string
  image_url: string
  participants_count: number
  tags: string[]
}

export interface HomeExchange {
  id: number
  title: string
  description: string
  status: string
  image_url: string
  participants_count: number
  tags: string[]
}

export interface HomeData {
  user: {
    first_name: string
  }
  cultures: Culture[]
  stats: HomeStats
  upcoming_events: HomeEvent[]
  active_exchanges: HomeExchange[]
}