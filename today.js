const quoteText = document.querySelector(".quote-text");
const quoteUrlField = document.querySelector(".quote-url");

async function loadQuote() {
  try {
    const res = await fetch("http://localhost:8080/random");
    const data = await res.json();
    quoteText.innerHTML = `<p style= font-style:bold >"${data.text}"</p> <p style=font-size:15px , font-weight:400 ,>- ${data.author}</p>`;
    quoteUrlField.value = `http://localhost:8080/quote/${data.id}`;
  } catch (error) {
    quoteText.textContent = "Failed to load quote. Try again later.";
    console.error(error);
  }
}

loadQuote();
