formatBtns = document.querySelectorAll(".format-btn");
const randonEndpoint = "http://localhost:8080/random";
const uniqueEndpoint = "http://localhost:8080/";
let currentFormat = "json";

formatBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formatBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentFormat = btn.dataset.format;
  });
});

document.querySelector(".get_btn").addEventListener("click", function (e) {
  e.preventDefault();
  fetch(randonEndpoint)
    .then((res) => res.json())
    .then((quote) => {
      if (currentFormat == "json") {
        const formattedJson = JSON.stringify(quote, null, 2);
        console.log(formattedJson);
        document.querySelector(".response").textContent = formattedJson;
        document.querySelector(".request").textContent = randonEndpoint;
      } else if (currentFormat == "text") {
        document.querySelector(".response").textContent =
          `${quote.text}` + "\n \n" + "- " + `${quote.author}`;
        document.querySelector(".request").textContent =
          uniqueEndpoint + `quote/${quote.id}`;
        document.querySelector(".response").style.overflow = "hidden";
        document.querySelector(".response").style.whiteSpace = "pre-wrap";
      }
    })
    .catch((err) => {
      document.querySelector(".response").textContent = "Failed to load quote.";
      console.error(err);
    });
});
