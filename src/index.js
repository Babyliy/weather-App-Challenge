function handleSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search");
  let h1 = document.querySelector("#city");
  h1.innerHTML = searchInput.value;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSearch);
