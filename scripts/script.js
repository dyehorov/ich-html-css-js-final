import { events, upcomingEvents, topCategories } from "./data/data.js"
import { createEventCard } from "./components/eventCard.js"
import { createTopCategoriesCard } from "./components/topCategoryCard.js"
import { renderEventCards, renderTopCategoriesCards } from "./render/render.js"
import { initPrivacyModal } from "./ui/privacyModal.js"

const eventsListContainer = document.querySelector(".events-near-container")
const upcomingEventsListContainer = document.querySelector(
  ".upcoming-events-container"
)
const topCategoriesListContainer = document.querySelector(
  ".top-categories-list"
)

initPrivacyModal()
renderEventCards(events, eventsListContainer, createEventCard)
renderEventCards(upcomingEvents, upcomingEventsListContainer, createEventCard)
renderTopCategoriesCards(
  topCategories,
  topCategoriesListContainer,
  createTopCategoriesCard
)
