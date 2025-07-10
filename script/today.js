const quoteText = document.querySelector(".quote-text");
const quoteUrlField = document.querySelector(".quote-url");
const quoteAuthor = document.querySelector(".quote-author");

async function loadQuote() {
  try {
    const res = await fetch("http://localhost:8080/random");
    const quote = await res.json();
    quoteText.textContent = `${quote.text}`;
    quoteAuthor.textContent = `- ${quote.author}`;
    quoteUrlField.value = `http://localhost:8080/quote/${quote.id}`;
    localStorage.setItem("quoteLoaded", "true");
    localStorage.setItem("quoteText", quote.text);
    localStorage.setItem("quoteAuthor", quote.author);
    localStorage.setItem("quoteId", quote.id);
  } catch (error) {
    quoteText.textContent = "Failed to load quote. Try again later.";
    console.error(error);
  }
}

if (!localStorage.getItem("quoteLoaded")) {
  loadQuote();
} else {
  quoteText.textContent = localStorage.getItem("quoteText");
  quoteAuthor.textContent = `- ${localStorage.getItem("quoteAuthor")}`;
  quoteUrlField.value = `http://localhost:8080/quote/${localStorage.getItem(
    "quoteId"
  )}`;
}

function copyText(btn) {
  const quote = document.querySelector(".quote-url").value;
  const tooltip = btn.querySelector(".tooltip");

  navigator.clipboard.writeText(quote).then(() => {
    // Show tooltip
    tooltip.classList.add("show");
    tooltip.textContent = "Copied!";
    btn.disabled = true;
    // btn.textContent = "Copied!";
    btn.appendChild(tooltip); // reattach tooltip in case it's removed

    // Hide tooltip and re-enable after 2.5s
    setTimeout(() => {
      tooltip.classList.remove("show");
    }, 1000);

    setTimeout(() => {
      btn.disabled = false;
      tooltip.textContent = "Copied!";
      btn.appendChild(tooltip);
    }, 10000);
  });
}
