function submit() {
  const inputElement = document.querySelector(".js-name");

  const inputValue = inputElement.value;

  if (!inputValue) {
    document.querySelector(".js-blank-output").innerHTML =
      "This field is required";
  } else {
    alert("Message sent");
  }
}
