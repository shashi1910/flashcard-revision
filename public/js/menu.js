document
  .getElementById("start-revision")
  .addEventListener("click", function () {
    window.location.href = "/revision";
  });

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const question = document.querySelector("#question").value;
  const answer = document.querySelector("#answer").value;
  const data = { question, answer };
  fetch("http://localhost:3000/flashcards", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
});
