// import { Link, useLocation } from "react-router-dom"
// import { useEffect } from "react"
// import { useHomeStore } from "../../store/homeStore"
// import type { Culture, HomeEvent, HomeExchange } from "../../types/home"

// import {
//   HomeIcon,
//   UserGroupIcon,
//   BookOpenIcon,
//   CalendarIcon,
//   ChatBubbleOvalLeftIcon,
//   ArrowPathRoundedSquareIcon,
//   UserIcon
// } from "@heroicons/react/24/outline"


// const navItems = [
//   { label: "Home", to: "/home", icon: HomeIcon },
//   { label: "Community", to: "/community", icon: UserGroupIcon },
//   { label: "Exchanges", to: "/exchanges", icon: ArrowPathRoundedSquareIcon },
//   { label: "Events", to: "/events", icon: CalendarIcon },
//   { label: "Chats", to: "/chats", icon: ChatBubbleOvalLeftIcon },
//   { label: "Articles", to: "/articles", icon: BookOpenIcon },
//   { label: "Profile", to: "/profile", icon: UserIcon },
// ]

// export const HomePage = () => {
//   const location = useLocation()
//   const { home, loading, error, fetchHome } = useHomeStore()

//   useEffect(() => {
//     fetchHome()
//   }, [fetchHome])

//   if (loading) {
//     return <div>Loading...</div>
//   }

//   if (error) {
//     return <div>{error}</div>
//   }

//   if (!home) {
//     return null
//   }

//   const cultures = home.cultures
//   const stats = [
//     {
//       icon: "📈",
//       value: home.stats.active_members,
//       label: "Active Members",
//     },
//     {
//       icon: "📅",
//       value: home.stats.upcoming_events,
//       label: "Upcoming Events",
//     },
//     {
//       icon: "👥",
//       value: home.stats.active_exchanges,
//       label: "Active Exchanges",
//     },
//   ]

//     const events = home.upcoming_events
//     const exchanges = home.active_exchanges

//   return (
//     <div className="flex min-h-screen flex-col bg-[#f5f2ed] font-serif">
//       <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-[#e4dfd7] bg-[#f5f2ed] px-7">
//         <div className="flex items-center gap-2.5">
//           <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#4a6741]">
//             <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="white">
//               <path d="M12 2L9 9H2l5.5 4-2 7L12 16l6.5 4-2-7L22 9h-7z" />
//             </svg>
//           </div>
//           <span className="text-[1.15rem] font-bold tracking-[-0.01em] text-[#1e2d1f]">CultureConnect</span>
//         </div>

//         <div className="flex items-center gap-5">
//           <button className="p-1 text-[#4a5a4b] transition hover:text-[#1e2d1f]">
//             <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <circle cx="11" cy="11" r="8" />
//               <line x1="21" y1="21" x2="16.65" y2="16.65" />
//             </svg>
//           </button>

//           <button className="relative p-1 text-[#4a5a4b] transition hover:text-[#1e2d1f]">
//             <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
//               <path d="M13.73 21a2 2 0 01-3.46 0" />
//             </svg>
//             <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-[#c0392b] font-sans text-[0.6rem] font-bold text-white">
//               2
//             </span>
//           </button>

//           <button className="p-1 text-[#4a5a4b] transition hover:text-[#1e2d1f]">
//             <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
//               <circle cx="12" cy="7" r="4" />
//             </svg>
//           </button>
//         </div>
//       </header>

//       <div className="flex flex-1">
//         <aside className="sticky top-16 flex h-[calc(100vh-64px)] w-60 shrink-0 flex-col justify-between border-r border-[#e4dfd7] bg-[#f5f2ed] py-5 pb-6">
//           <nav className="flex flex-col gap-0.5 px-3">
//             {navItems.map(({ label, to, icon: Icon }) => {
//               const isActive = location.pathname === to

//               return (
//                 <Link
//                   key={label}
//                   to={to}
//                   className={`flex w-full items-center gap-3 rounded-[10px] px-3.5 py-2.5 text-left font-sans text-[0.925rem] transition ${
//                     isActive
//                       ? "bg-[#4a6741] font-semibold text-white"
//                       : "text-[#3a4a3b] hover:bg-[#eae6df]"
//                   }`}
//                 >
//                   <Icon />
//                   {label}
//                 </Link>
//               )
//             })}
//           </nav>

//           <div className="mx-3 rounded-xl border border-[#ddd5c5] bg-[#eee8de] p-4">
//             <p className="mb-1.5 text-[0.9rem] font-bold text-[#1e2d1f]">Upgrade to Premium</p>
//             <p className="mb-3 font-sans text-[0.78rem] leading-[1.4] text-[#7a8a7b]">
//               Unlock exclusive features and priority support
//             </p>
//             <button className="w-full rounded-lg bg-[#4a6741] p-[9px] font-sans text-[0.85rem] font-semibold text-white transition hover:bg-[#3c5535]">
//               Learn More
//             </button>
//           </div>
//         </aside>

//         <main className="flex-1 overflow-y-auto px-10 py-9">
//           <div className="mb-9">
//             <h1 className="mb-2 text-[2.2rem] font-bold tracking-[-0.02em] text-[#1e2d1f]"> Welcome back, {home.user.first_name}</h1>
//             <p className="font-sans text-base text-[#7a8a7b]">Connect with cultures, share stories, and expand your horizons</p>
//           </div>

//           <section className="mb-9">
//             <h2 className="mb-4 text-xl font-bold text-[#1e2d1f]">Explore Cultures</h2>
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
//                 {cultures.map((culture: Culture) => (
//                   <div
//                     key={culture.id}
//                     className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl"
//                   >
//                     <img
//                       src={`http://127.0.0.1:8000${culture.image_url}`}
//                       alt={culture.name}
//                       className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
//                     />

//                     <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />

//                     <span className="absolute bottom-2.5 left-3 text-sm font-semibold text-white">
//                       {culture.name}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//           </section>

//           <div className="mb-10 grid grid-cols-3 gap-4">
//             {stats.map((item) => (
//               <div key={item.label} className="flex items-center gap-4 rounded-[14px] border border-[#e8ede4] bg-white p-5">
//                 <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f0f4ee] text-lg">{item.icon}</div>
//                 <div>
//                   <p className="text-[1.6rem] font-bold leading-none text-[#1e2d1f]">{item.value}</p>
//                   <p className="mt-1 font-sans text-[0.82rem] text-[#7a8a7b]">{item.label}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <section className="mb-10">
//             <div className="mb-[18px] flex items-center justify-between">
//               <h2 className="text-xl font-bold text-[#1e2d1f]">Upcoming Events</h2>
//               <button className="flex items-center gap-1 font-sans text-sm font-semibold text-[#4a6741] hover:text-[#32472d]">View all →</button>
//             </div>

//             <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
//               {events.map((event: HomeEvent) => (
//                 <div
//                   key={event.id}
//                   className="flex overflow-hidden rounded-[14px] border border-[#e8ede4] bg-white"
//                 >
//                   <div className="flex w-full flex-col">
//                     <img
//                       src={`http://127.0.0.1:8000${event.image_url}`}
//                       alt={event.title}
//                       className="h-40 w-full object-cover"
//                     />

//                     <div className="flex flex-1 flex-col gap-2 p-4">
//                       <div className="flex flex-wrap gap-1.5">
//                         {event.tags.map((tag) => (
//                           <span
//                             key={tag}
//                             className="rounded-full border border-[#dde5d0] bg-[#f0f4ee] px-2.5 py-0.5 font-sans text-[0.72rem] font-medium text-[#4a5a4b]"
//                           >
//                             {tag}
//                           </span>
//                         ))}
//                       </div>

//                       <p className="text-[0.95rem] font-bold leading-[1.3] text-[#1e2d1f]">
//                         {event.title}
//                       </p>

//                       <p className="font-sans text-[0.8rem] leading-[1.4] text-[#7a8a7b]">
//                         {event.description}
//                       </p>

//                       <div className="font-sans text-[0.78rem] text-[#5a6a5b]">
//                         <div className="mb-1 flex items-center gap-1.5">
//                           <span>📅</span>
//                           {new Date(event.event_date).toLocaleDateString()}
//                         </div>

//                         <div className="flex items-center gap-1.5">
//                           <span>📍</span>
//                           {event.location}
//                         </div>
//                       </div>

//                       <div className="mt-auto flex items-center justify-between pt-2.5">
//                         <span className="font-sans text-[0.8rem] text-[#7a8a7b]">
//                           👥 {event.participants_count}
//                         </span>

//                         <button className="rounded-lg bg-[#4a6741] px-3.5 py-[7px] font-sans text-[0.8rem] font-semibold text-white transition hover:bg-[#3c5535]">
//                           View Details
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
//   {exchanges.map((exchange: HomeExchange) => (
//     <div
//       key={exchange.id}
//       className="overflow-hidden rounded-[14px] border border-[#e8ede4] bg-white"
//     >
//       <img
//         src={`http://127.0.0.1:8000${exchange.image_url}`}
//         alt={exchange.title}
//         className="h-[200px] w-full object-cover"
//       />

//       <div className="p-[18px]">
//         <div className="mb-2.5 flex items-center justify-between gap-3">
//           <div className="flex flex-wrap gap-1.5">
//             {exchange.tags.map((tag) => (
//               <span
//                 key={tag}
//                 className="rounded-full border border-[#dde5d0] bg-[#f0f4ee] px-2.5 py-0.5 font-sans text-[0.72rem] font-medium text-[#4a5a4b]"
//               >
//                 {tag}
//               </span>
//             ))}
//             </div>

//             <span className="flex items-center gap-1.5 font-sans text-[0.78rem] font-semibold text-[#3d6b38]">
//               <span className="inline-block h-[7px] w-[7px] rounded-full bg-[#3d6b38]" />
//               {exchange.status}
//             </span>
//           </div>

//           <p className="mb-1.5 text-base font-bold text-[#1e2d1f]">
//             {exchange.title}
//           </p>

//           <p className="mb-3 font-sans text-[0.82rem] leading-[1.5] text-[#7a8a7b]">
//             {exchange.description}
//           </p>

//           <div className="flex items-center justify-between">
//             <span className="font-sans text-[0.82rem] text-[#7a8a7b]">
//               👥 {exchange.participants_count} participants
//             </span>

//             <button className="rounded-lg bg-[#4a6741] px-3.5 py-[7px] font-sans text-[0.8rem] font-semibold text-white">
//               Join
//             </button>
//           </div>
//         </div>
//       </div>
//     ))}
//   </div>

//                       <p className="text-[0.95rem] font-bold leading-[1.3] text-[#1e2d1f]">{event.title}</p>
//                       <p className="font-sans text-[0.8rem] leading-[1.4] text-[#7a8a7b]">{event.description}</p>

//                       <div className="font-sans text-[0.78rem] text-[#5a6a5b]">
//                         <div className="mb-1 flex items-center gap-1.5">
//                           <span>📅</span> {event.date} · {event.time}
//                         </div>
//                         <div className="flex items-center gap-1.5">
//                           <span>📍</span> {event.location}
//                         </div>
//                       </div>

//                       <div className="mt-auto flex items-center justify-between pt-2.5">
//                         <div className="flex gap-2.5 font-sans text-[0.8rem] text-[#7a8a7b]">
//                           <span>👥 {event.attendees}</span>
//                           <span className="font-semibold text-[#4a6741]">{event.price}</span>
//                         </div>
//                         <button className="rounded-lg bg-[#4a6741] px-3.5 py-[7px] font-sans text-[0.8rem] font-semibold text-white transition hover:bg-[#3c5535]">
//                           View Details
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>

//           <section className="mb-10">
//             <div className="mb-[18px] flex items-center justify-between">
//               <h2 className="text-xl font-bold text-[#1e2d1f]">Active Exchanges</h2>
//               <button className="font-sans text-sm font-semibold text-[#4a6741] hover:text-[#32472d]">View all →</button>
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               {exchanges.map((exchange) => (
//                 <div key={exchange.id} className="overflow-hidden rounded-[14px] border border-[#e8ede4] bg-white">
//                   <img src={exchange.img} alt={exchange.title} className="h-[200px] w-full object-cover" />

//                   <div className="p-[18px]">
//                     <div className="mb-2.5 flex items-center justify-between gap-3">
//                       <div className="flex flex-wrap gap-1.5">
//                         {exchange.tags.map((tag) => (
//                           <span key={tag} className="rounded-full border border-[#dde5d0] bg-[#f0f4ee] px-2.5 py-0.5 font-sans text-[0.72rem] font-medium text-[#4a5a4b]">
//                             {tag}
//                           </span>
//                         ))}
//                       </div>

//                       <span className="flex items-center gap-1.5 font-sans text-[0.78rem] font-semibold text-[#3d6b38]">
//                         <span className="inline-block h-[7px] w-[7px] rounded-full bg-[#3d6b38]" />
//                         Active
//                       </span>
//                     </div>

//                     <p className="mb-1.5 text-base font-bold text-[#1e2d1f]">{exchange.title}</p>
//                     <p className="mb-3 font-sans text-[0.82rem] leading-[1.5] text-[#7a8a7b]">{exchange.description}</p>

//                     <div className="mb-3.5 flex flex-wrap gap-1.5">
//                       {exchange.topics.map((topic) => (
//                         <span key={topic} className="rounded-full border border-[#e4dfd7] bg-[#f5f2ed] px-2.5 py-[3px] font-sans text-[0.72rem] text-[#6a7a6b]">
//                           {topic}
//                         </span>
//                       ))}
//                     </div>

//                     <div className="flex items-center justify-between">
//                       <span className="font-sans text-[0.82rem] text-[#7a8a7b]">👥 {exchange.participants} participants</span>
//                       <button className="rounded-lg bg-[#4a6741] px-[22px] py-2 font-sans text-sm font-semibold text-white transition hover:bg-[#3c5535]">
//                         Join
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>
//         </main>
//       </div>
//     </div>
//   )
// }


// // import { useEffect } from "react"
// // import { useHomeStore } from "../../store/homeStore"

// // export const HomePage = () => {
  
// //   const { data, loading, error, fetchHome } = useHomeStore()

// //   useEffect(() => {
// //     fetchHome()
// //   }, [])

// //   if (loading) return <div>Loading...</div>
// //   if (error) return <div>{error}</div>
// //   if (!data) return null

// //   return (
// //     <div className="p-6">
// //       <h1 className="text-3xl font-bold mb-4">
// //         Welcome back, {data.user.first_name}
// //       </h1>

// //       {/* STATS */}
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
// //         <div className="bg-white p-4 rounded-xl">
// //           <p>Active Members</p>
// //           <h2>{data.stats.active_members}</h2>
// //         </div>

// //         <div className="bg-white p-4 rounded-xl">
// //           <p>Upcoming Events</p>
// //           <h2>{data.stats.upcoming_events}</h2>
// //         </div>

// //         <div className="bg-white p-4 rounded-xl">
// //           <p>Active Exchanges</p>
// //           <h2>{data.stats.active_exchanges}</h2>
// //         </div>
// //       </div>

// //       {/* CULTURES */}
// //       <h2 className="text-xl font-bold mb-2">Explore Cultures</h2>
// //       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
// //         {data.cultures.map((c) => (
// //           <div key={c.id} className="bg-white rounded-xl p-3">
// //             <img src={c.image_url} className="rounded-lg mb-2" />
// //             <p>{c.name}</p>
// //           </div>
// //         ))}
// //       </div>

// //       {/* EVENTS */}
// //       <h2 className="text-xl font-bold mb-2">Upcoming Events</h2>
// //       <div className="grid md:grid-cols-3 gap-4 mb-6">
// //         {data.upcoming_events.map((e) => (
// //           <div key={e.id} className="bg-white p-4 rounded-xl">
// //             <img src={e.image_url} className="rounded mb-2" />
// //             <h3 className="font-bold">{e.title}</h3>
// //             <p>{e.location}</p>
// //           </div>
// //         ))}
// //       </div>

// //       {/* EXCHANGES */}
// //       <h2 className="text-xl font-bold mb-2">Active Exchanges</h2>
// //       <div className="grid md:grid-cols-2 gap-4">
// //         {data.active_exchanges.map((ex) => (
// //           <div key={ex.id} className="bg-white p-4 rounded-xl">
// //             <img src={ex.image_url} className="rounded mb-2" />
// //             <h3 className="font-bold">{ex.title}</h3>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   )
// // }

import { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import {
  MagnifyingGlassIcon,
  UserIcon,
  BellIcon,
} from "@heroicons/react/16/solid"
import { useHomeStore } from "../../store/homeStore"
import type { Culture, HomeEvent, HomeExchange } from "../../types/home"

const API_URL = "http://127.0.0.1:8000"

const navItems = [
  { label: "Home", to: "/home", icon: HomeIcon },
  { label: "Community", to: "/community", icon: CommunityIcon },
  { label: "Exchanges", to: "/exchanges", icon: ExchangeIcon },
  { label: "Events", to: "/events", icon: EventIcon },
  { label: "Chats", to: "/chats", icon: ChatIcon },
  { label: "Articles", to: "/articles", icon: ArticleIcon },
  { label: "Profile", to: "/profile", icon: ProfileIcon },
]

function getImageUrl(imageUrl?: string) {
  if (!imageUrl) return ""
  if (imageUrl.startsWith("http")) return imageUrl
  return `${API_URL}${imageUrl}`
}

export const HomePage = () => {
  const location = useLocation()
  const { data: home, loading, error, fetchHome } = useHomeStore()

  useEffect(() => {
    fetchHome()
  }, [fetchHome])

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f5f2ed] text-[#1e2d1f]">
        Loading...
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f5f2ed] text-red-600">
        {error}
      </div>
    )
  }

  if (!home) {
    return null
  }

  const cultures = home.cultures
  const events = home.upcoming_events
  const exchanges = home.active_exchanges

  const stats = [
    {
      icon: "👥",
      value: home.stats.active_members,
      label: "Active Members",
    },
    {
      icon: "📅",
      value: home.stats.upcoming_events,
      label: "Upcoming Events",
    },
    {
      icon: "🔄",
      value: home.stats.active_exchanges,
      label: "Active Exchanges",
    },
  ]

  return (
    <div className="min-h-screen bg-[#f5f2ed]">
      <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-[#e4dfd7] bg-[#f5f2ed] px-4 sm:px-6 lg:px-7">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#4a6741]">
            <span className="text-white">✦</span>
          </div>

          <span className="text-lg font-bold text-[#1e2d1f]">
            CultureConnect
          </span>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-[#4a5a4b] hover:text-[#1e2d1f]">
            <MagnifyingGlassIcon className="h-5 w-5" />
          </button>

          <button className="text-[#4a5a4b] hover:text-[#1e2d1f]">
            <UserIcon className="h-5 w-5" />
          </button>

          <button className="text-[#4a5a4b] hover:text-[#1e2d1f]">
            <BellIcon className="h-5 w-5" />
          </button>
        </div>
      </header>

      <div className="flex">
        <aside className="sticky top-16 hidden h-[calc(100vh-64px)] w-60 shrink-0 border-r border-[#e4dfd7] bg-[#f5f2ed] py-5 md:block">
          <nav className="flex flex-col gap-1 px-3">
            {navItems.map(({ label, to, icon: Icon }) => {
              const isActive = location.pathname === to

              return (
                <Link
                  key={label}
                  to={to}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${
                    isActive
                      ? "bg-[#4a6741] font-semibold text-white"
                      : "text-[#3a4a3b] hover:bg-[#eae6df]"
                  }`}
                >
                  <Icon />
                  {label}
                </Link>
              )
            })}
          </nav>
        </aside>

        <main className="w-full flex-1 px-4 py-6 sm:px-6 lg:px-10">
          <section className="mb-8">
            <h1 className="mb-2 text-3xl font-bold text-[#1e2d1f] md:text-4xl">
              Welcome back, {home.user.first_name}
            </h1>

            <p className="text-[#5f6b5f]">
              Explore cultures, events and exchanges around the world.
            </p>
          </section>

          <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-[#e8ede4] bg-white p-5 shadow-sm"
              >
                <div className="mb-3 text-2xl">{stat.icon}</div>
                <h2 className="text-3xl font-bold text-[#1e2d1f]">
                  {stat.value}
                </h2>
                <p className="mt-1 text-sm text-[#6b766b]">{stat.label}</p>
              </div>
            ))}
          </section>

          <section className="mb-8">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-[#1e2d1f]">
                Explore Cultures
              </h2>
              <button className="text-sm font-semibold text-[#4a6741]">
                View all
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {cultures.map((culture: Culture) => (
                <div
                  key={culture.id}
                  className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl"
                >
                  <img
                    src={getImageUrl(culture.image_url)}
                    alt={culture.name}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />

                  <span className="absolute bottom-2.5 left-3 text-sm font-semibold text-white">
                    {culture.name}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-[#1e2d1f]">
                Upcoming Events
              </h2>
              <button className="text-sm font-semibold text-[#4a6741]">
                View all
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {events.map((event: HomeEvent) => (
                <div
                  key={event.id}
                  className="overflow-hidden rounded-2xl border border-[#e8ede4] bg-white shadow-sm"
                >
                  <img
                    src={getImageUrl(event.image_url)}
                    alt={event.title}
                    className="h-40 w-full object-cover"
                  />

                  <div className="p-4">
                    <div className="mb-2 flex flex-wrap gap-1.5">
                      {event.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[#f0f4ee] px-2.5 py-1 text-xs font-medium text-[#4a5a4b]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="mb-2 font-bold text-[#1e2d1f]">
                      {event.title}
                    </h3>

                    <p className="mb-3 line-clamp-2 text-sm text-[#7a8a7b]">
                      {event.description}
                    </p>

                    <div className="mb-3 space-y-1 text-sm text-[#5a6a5b]">
                      <p>📅 {new Date(event.event_date).toLocaleDateString()}</p>
                      <p>📍 {event.location}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#7a8a7b]">
                        👥 {event.participants_count}
                      </span>

                      <button className="rounded-lg bg-[#4a6741] px-4 py-2 text-sm font-semibold text-white hover:bg-[#3c5535]">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-[#1e2d1f]">
                Active Exchanges
              </h2>
              <button className="text-sm font-semibold text-[#4a6741]">
                View all
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              {exchanges.map((exchange: HomeExchange) => (
                <div
                  key={exchange.id}
                  className="overflow-hidden rounded-2xl border border-[#e8ede4] bg-white shadow-sm"
                >
                  <img
                    src={getImageUrl(exchange.image_url)}
                    alt={exchange.title}
                    className="h-48 w-full object-cover"
                  />

                  <div className="p-5">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-1.5">
                        {exchange.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-[#f0f4ee] px-2.5 py-1 text-xs font-medium text-[#4a5a4b]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <span className="flex items-center gap-1.5 text-xs font-semibold text-[#3d6b38]">
                        <span className="h-2 w-2 rounded-full bg-[#3d6b38]" />
                        {exchange.status}
                      </span>
                    </div>

                    <h3 className="mb-2 font-bold text-[#1e2d1f]">
                      {exchange.title}
                    </h3>

                    <p className="mb-4 line-clamp-2 text-sm text-[#7a8a7b]">
                      {exchange.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#7a8a7b]">
                        👥 {exchange.participants_count} participants
                      </span>

                      <button className="rounded-lg bg-[#4a6741] px-4 py-2 text-sm font-semibold text-white">
                        Join
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

function HomeIcon() {
  return <span className="text-lg">🏠</span>
}

function CommunityIcon() {
  return <span className="text-lg">👥</span>
}

function ExchangeIcon() {
  return <span className="text-lg">🔄</span>
}

function EventIcon() {
  return <span className="text-lg">📅</span>
}

function ChatIcon() {
  return <span className="text-lg">💬</span>
}

function ArticleIcon() {
  return <span className="text-lg">📄</span>
}

function ProfileIcon() {
  return <span className="text-lg">👤</span>
}