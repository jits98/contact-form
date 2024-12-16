const button = document.querySelector(".submit-button");

button.addEventListener("click", submit);

function submit() {
  const inputElement = document.querySelector(".js-name").value;

  const inputElement2 = document.querySelector(".js-name-2").value;

  const inputElement3 = document.querySelector(".email-bar").value;

  const inputElement5 = document.querySelector(".js-msg-bar").value;

  const isChecked = document.querySelector(".js-checkbox").checked;

  const isRadioChecked = document.querySelector(".radio-check-1").checked;

  const isRadioChecked1 = document.querySelector(".radio-check-2").checked;

  if (!inputElement) {
    document.querySelector(".js-blank-output").innerHTML =
      "This field is required";
    document.querySelector(".js-name").style.borderColor = "red";
    document.querySelector(".js-blank-output").style.display = "block";
  }

  if (!inputElement2) {
    document.querySelector(".js-blank-output-2").innerHTML =
      "This field is required";
    document.querySelector(".js-name-2").style.borderColor = "red";
    document.querySelector(".js-blank-output-2").style.display = "block";
  }

  if (!inputElement3) {
    document.querySelector(".js-blank-output-3").innerHTML =
      "Please enter a valid email address";
    document.querySelector(".js-email").style.borderColor = "red";
    document.querySelector(".js-blank-output-3").style.display = "block";
  }

  if (!isRadioChecked && !isRadioChecked1) {
    document.querySelector(".js-blank-output-4").innerHTML =
      "Please select a query type";
    document.querySelector(".js-blank-output-4").style.display = "block";
  }

  if (!inputElement5) {
    document.querySelector(".js-blank-output-5").innerHTML =
      "This field is required";
    document.querySelector(".js-msg-bar").style.borderColor = "red";
    document.querySelector(".js-blank-output-5").style.display = "block";
  }

  if (!isChecked) {
    document.querySelector(".js-blank-output-6").innerHTML =
      "To submit this form, please consent to being contacted";
    document.querySelector(".js-blank-output-6").style.display = "block";
  }

  if (
    inputElement &&
    inputElement2 &&
    inputElement3 &&
    inputElement5 &&
    isChecked &&
    isRadioChecked
  ) {
    document.querySelector(".toast").innerHTML =
      "<div class=toast-first-line><img src='tick-circle.svg' class='circle'><span class='message-toast'>Message Sent!</span></div> <p> Thanks for completing the form. We'll be in touch soon!</p>";
    document.querySelector(".toast").style.display = "block";
  }
}

function chBackcolor(color) {
  const isRadioChecked2 = document.querySelector(".radio-check-1").checked;

  const isRadioChecked3 = document.querySelector(".radio-check-2").checked;

  if (isRadioChecked2) {
    document.querySelector(".query-box-type").style.background = color;
    document.querySelector(".query-box-type-2").style = "none";
  }

  if (isRadioChecked3) {
    document.querySelector(".query-box-type").style = "none";
    document.querySelector(".query-box-type-2").style.background = color;
  }
}
