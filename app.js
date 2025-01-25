const quoteContainer = document.querySelector("#quote-container");
const quoteText = document.querySelector("#quote");
const authorText = document.querySelector("#author");
const twitterBtn = document.querySelector("#twitter");
const newQuoteBtn = document.querySelector("#new-quote");

let apiQuotes = [];

function newQuote() {
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  authorText.textContent = quote.author;
  quoteText.textContent = quote.quote;
}

async function getQuotes() {
  const apiUrl = `https://qapi.vercel.app/api/quotes`;
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {}
}

getQuotes();

fetch("https://qapi.vercel.app/api/quotes")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((quote) => {});
    let quote = response.quote;
  });

let buttonElement = document.querySelector("#new-quote");
buttonElement.addEventListener("click", newQuote);
