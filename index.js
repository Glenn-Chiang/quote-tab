const quoteElem = document.getElementById("quote").querySelector("span");
const authorElem = document.getElementById("author");

const apiUrl = "https://quotes-api-408713.as.r.appspot.com";

async function fetchAndDisplayQuote() {
  const res = await fetch(apiUrl + "/quotes/random");
  const quoteData = await res.json();
  const quoteText = quoteData.content;
  const author = quoteData.author.name;
  quoteElem.textContent = quoteText;
  authorElem.textContent = author;
}

fetchAndDisplayQuote();

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("searchbar");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchTerms = searchInput.value.split(" ");
  const searchString = searchTerms.join("+");
  console.log(searchString);
  window.location.href = `https://www.google.com/search?q=${searchString}`;
});
