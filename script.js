const button = document.querySelector(".submit-button");

button.addEventListener("click", submit);

function submit() {
  const inputElement = document.querySelector(".js-name");

  const inputElement2 = document.querySelector(".js-name-2");

  const inputElement3 = document.querySelector(".email-bar");

  const inputElement5 = document.querySelector(".js-msg-bar");

  const isChecked = document.querySelector(".js-checkbox");

  const isRadioChecked = document.querySelector(".radio-check-1");

  const isRadioChecked1 = document.querySelector(".radio-check-2");

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (inputElement.value.trim() === "") {
    document.querySelector(".js-blank-output").innerHTML =
      "This field is required";
    document.querySelector(".js-name").style.borderColor = "red";
    document.querySelector(".js-blank-output").style.display = "block";
  }

  if (inputElement2.value.trim() === "") {
    document.querySelector(".js-blank-output-2").innerHTML =
      "This field is required";
    document.querySelector(".js-name-2").style.borderColor = "red";
    document.querySelector(".js-blank-output-2").style.display = "block";
  }

  if (
    inputElement3.value.trim() === "" ||
    !emailRegex.test(inputElement3.value)
  ) {
    document.querySelector(".js-blank-output-3").innerHTML =
      "Please enter a valid email address";
    document.querySelector(".js-email").style.borderColor = "red";
    document.querySelector(".js-blank-output-3").style.display = "block";
  }

  if (!isRadioChecked.checked && !isRadioChecked1.checked) {
    document.querySelector(".js-blank-output-4").innerHTML =
      "Please select a query type";
    document.querySelector(".js-blank-output-4").style.display = "block";
  }

  if (inputElement5.value.trim() === "") {
    document.querySelector(".js-blank-output-5").innerHTML =
      "This field is required";
    document.querySelector(".js-msg-bar").style.borderColor = "red";
    document.querySelector(".js-blank-output-5").style.display = "block";
  }

  if (!isChecked.checked) {
    document.querySelector(".js-blank-output-6").innerHTML =
      "To submit this form, please consent to being contacted";
    document.querySelector(".js-blank-output-6").style.display = "block";
  }

  if (
    inputElement &&
    inputElement2 &&
    inputElement3 &&
    emailRegex.test(inputElement3.value) &&
    inputElement5 &&
    isChecked &&
    (isRadioChecked.checked || isRadioChecked1)
  ) {
    document.querySelector(".toast").innerHTML =
      "<div class=toast-first-line><img src='tick-circle.svg' class='circle'><span class='message-toast'>Message Sent!</span></div> <p> Thanks for completing the form. We'll be in touch soon!</p>";
    document.querySelector(".toast").style.display = "block";
  }

  inputElement.addEventListener("input", function () {
    if (inputElement.value.trim() !== "") {
      document.querySelector(".js-blank-output").style.display = "none";
      document.querySelector(".js-name").style.borderColor = "unset";
    }
  });

  inputElement2.addEventListener("input", function () {
    if (inputElement2.value.trim() !== "") {
      document.querySelector(".js-blank-output-2").style.display = "none";
      document.querySelector(".js-name-2").style.borderColor = "unset";
    }
  });

  inputElement3.addEventListener("input", function () {
    if (inputElement3.value.trim() !== "") {
      document.querySelector(".js-blank-output-3").style.display = "none";
      document.querySelector(".js-email").style.borderColor = "unset";
    }
  });

  inputElement5.addEventListener("input", function () {
    if (inputElement5.value.trim() !== "") {
      document.querySelector(".js-blank-output-5").style.display = "none";
      document.querySelector(".js-msg-bar").style.borderColor = "unset";
    }
  });

  isChecked.addEventListener("input", function () {
    if (isChecked.checked !== "") {
      document.querySelector(".js-blank-output-6").style.display = "none";
    }
  });

  isRadioChecked.addEventListener("input", function () {
    if (isRadioChecked.checked !== "") {
      document.querySelector(".js-blank-output-4").style.display = "none";
    }
  });

  isRadioChecked1.addEventListener("input", function () {
    if (isRadioChecked1.checked !== "") {
      document.querySelector(".js-blank-output-4").style.display = "none";
    }
  });
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
