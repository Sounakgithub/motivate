const quotes = [
  "The best way to get started is to quit talking and begin doing. – Walt Disney",
  "Don’t let yesterday take up too much of today. – Will Rogers",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
  "It’s not whether you get knocked down, it’s whether you get up. – Vince Lombardi",
  "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
  "Stay focused and never give up.",
  "Believe you can and you're halfway there. – Theodore Roosevelt"
];

function generateQuote() {
  const quoteElement = document.getElementById("quote");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];
}
