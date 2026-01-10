export function initMap(button, iframe, city) {
  button.addEventListener("click", () => {
    const encodedCity = encodeURIComponent(city)
    button.classList.add("hidden")
    iframe.src = `https://www.google.com/maps?q=${encodedCity}&output=embed`
  })
}
