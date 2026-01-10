export function renderEventCards(list, parentContainer, createEventCard) {
  parentContainer.innerHTML = ""

  list.forEach(event => {
    parentContainer.appendChild(createEventCard(event))
  })
}

export function renderTopCategoriesCards(
  list,
  parentContainer,
  createTopCategoriesCard
) {
  parentContainer.innerHTML = ""

  list.forEach(category => {
    parentContainer.appendChild(createTopCategoriesCard(category))
  })
}

export function renderFilterOptions(
  filters,
  parentContainer,
  createFilterOptions
) {
  filters.forEach(({ type, options }) => {
    parentContainer.appendChild(createFilterOptions(type, options))
  })
}
