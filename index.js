const textInput = document.querySelector(".input_text");
const buttonInput = document.querySelector(".input_button");
const textOutput = document.querySelector(".output_text");

function fetchData(text) {
  fetch(
    `https://api.funtranslations.com/translate/pirate.json?text=${text}`
  )
  .then((response) => response.json())
  .then((data) => {
    translate(data.contents.translated);
  })
  .catch((error) => console.log(error));
}

function translate(text) {
  textOutput.value = text;
}

buttonInput.addEventListener("click", () => {
  fetchData(textInput.value);
});
