export function createEventCard(event) {
  const {
    title,
    category,
    distanceKm,
    date,
    time,
    going,
    price,
    isOnline,
    image,
  } = event

  const li = document.createElement("li")
  li.classList.add("event-list-item")

  const article = document.createElement("article")
  article.classList.add("event-card")

  article.innerHTML = `<div class="event-card__image">
                <img
                  src="${image}"
                  alt="${title}"
                  loading="lazy"
                />
              </div>
              <div class="event-card__content">
                <h3 class="event-card__title">${title}</h3>
                <p class="event-card__category">${getEventCategory(
                  isOnline,
                  category,
                  distanceKm
                )}</p>
                <div class="event-card__meta">
                  <div class="event-card__date">
                    <img src="./assets/icons/calendar.svg" alt="Calendar icon" />
                    <span>${date} · ${time}</span>
                  </div>
                  <div class="event-card__footer">
                    <div class="event-card__going">
                      <img
                        src="./assets/icons/checkmark.svg"
                        alt="Checkmark icon"
                      />
                      <span>${going} going</span>
                    </div>
                    <div class="event-card__price">
                      <img src="./assets/icons/ticket.svg" alt="Ticket icon" />
                      <span>${price}</span>
                    </div>
                  </div>
                </div>
              </div>`

  li.appendChild(article)

  return li
}

function getEventCategory(isOnline, category, distanceKm) {
  if (!isOnline) {
    return `${category} <span>(${distanceKm} km)</span>`
  }

  return category
}
