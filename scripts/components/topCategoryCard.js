export function createTopCategoriesCard(category) {
  const li = document.createElement("li")
  li.classList.add("category-card")

  li.innerHTML = `<div class="category-card-inner">
                        <div class="category-card-content">
                            <div class="category-card-image">
                              <img src="${category.image}" alt="${category.title}">
                            </div>
                            <p class="category-title">${category.title}</p>
                        </div>
    </div>`

  return li
}
