import { filters, eventsStore } from "./data/data.js"
import { createFilterOptions } from "./components/filterOptions.js"
import { renderFilterOptions } from "./render/render.js"
import { initPrivacyModal } from "./ui/privacyModal.js"

const filtersForm = document.querySelector(".filters")

initPrivacyModal()
renderFilterOptions(filters, filtersForm, createFilterOptions)
