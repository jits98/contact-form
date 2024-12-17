// Set name to the elements

const inputElement = document.querySelector(".js-name");

const inputElement2 = document.querySelector(".js-name-2");

const inputElement3 = document.querySelector(".email-bar");

const inputElement5 = document.querySelector(".js-msg-bar");

const isChecked = document.querySelector(".js-checkbox");

const isRadioChecked = document.querySelector(".radio-check-1");

const isRadioChecked1 = document.querySelector(".radio-check-2");

const jsBlankOutput1 = document.querySelector(".js-blank-output");

const jsName1 = document.querySelector(".js-name");

const jsBlankOutput2 = document.querySelector(".js-blank-output-2");

const jsName2 = document.querySelector(".js-name-2");

const jsBlankOutput3 = document.querySelector(".js-blank-output-3");

const jsEmail = document.querySelector(".js-email");

const jsBlankOutput4 = document.querySelector(".js-blank-output-4");

const jsMsg = document.querySelector(".js-email");

const jsBlankOutput5 = document.querySelector(".js-blank-output-5");

const jsMsgBar = document.querySelector(".js-msg-bar");

const jsBlankOutput6 = document.querySelector(".js-blank-output-6");

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const toastMsg = document.querySelector(".toast");

// Submit button

const button = document.querySelector(".submit-button");

button.addEventListener("click", submit);

function submit() {
  handleFirstNameSubmit();
  handleLastNameSubmit();
  handleEmailSubmit();
  handleQuerySubmit();
  handleMsgSubmit();
  handleCheckBoxSubmit();
  handleToastMsgSubmit();
}

function handleFirstNameSubmit() {
  if (inputElement.value.trim() === "") {
    jsBlankOutput1.innerHTML = "This field is required";
    jsName1.style.borderColor = "red";
    jsBlankOutput1.style.display = "block";
  }
}

function handleLastNameSubmit() {
  if (inputElement2.value.trim() === "") {
    jsBlankOutput2.innerHTML = "This field is required";
    jsName2.style.borderColor = "red";
    jsBlankOutput2.style.display = "block";
  }
}

function handleEmailSubmit() {
  if (
    inputElement3.value.trim() === "" ||
    !emailRegex.test(inputElement3.value)
  ) {
    jsBlankOutput3.innerHTML = "Please enter a valid email address";
    jsEmail.style.borderColor = "red";
    jsBlankOutput3.style.display = "block";
  }
}

function handleQuerySubmit() {
  if (!isRadioChecked.checked && !isRadioChecked1.checked) {
    jsBlankOutput4.innerHTML = "Please select a query type";
    jsBlankOutput4.style.display = "block";
  }
}

function handleMsgSubmit() {
  if (inputElement5.value.trim() === "") {
    jsBlankOutput5.innerHTML = "This field is required";
    jsMsgBar.style.borderColor = "red";
    jsBlankOutput5.style.display = "block";
  }
}

function handleCheckBoxSubmit() {
  if (!isChecked.checked) {
    jsBlankOutput6.innerHTML =
      "To submit this form, please consent to being contacted";
    jsBlankOutput6.style.display = "block";
  }
}

function handleToastMsgSubmit() {
  if (
    inputElement.value &&
    inputElement2.value &&
    inputElement3.value &&
    emailRegex.test(inputElement3.value) &&
    inputElement5.value &&
    isChecked &&
    (isRadioChecked.checked || isRadioChecked1.checked)
  ) {
    toastMsg.innerHTML =
      "<div class=toast-first-line><img src='tick-circle.svg' class='circle'><span class='message-toast'>Message Sent!</span></div> <p> Thanks for completing the form. We'll be in touch soon!</p>";
    toastMsg.classList.add("show");

    setTimeout(() => {
      toastMsg.classList.remove("show");
    }, 2000);
  }
}

inputElement.addEventListener("input", function () {
  if (inputElement.value.trim() !== "") {
    jsBlankOutput1.style.display = "none";
    jsName1.style.borderColor = "unset";
  }
});

inputElement2.addEventListener("input", function () {
  if (inputElement2.value.trim() !== "") {
    jsBlankOutput2.style.display = "none";
    jsName2.style.borderColor = "unset";
  }
});

inputElement3.addEventListener("input", function () {
  if (inputElement3.value.trim() !== "") {
    jsBlankOutput3.style.display = "none";
    jsEmail.style.borderColor = "unset";
  }
});

inputElement5.addEventListener("input", function () {
  if (inputElement5.value.trim() !== "") {
    jsBlankOutput5.style.display = "none";
    jsMsgBar.style.borderColor = "unset";
  }
});

isRadioChecked.addEventListener("input", function () {
  if (isRadioChecked.checked !== "") {
    jsBlankOutput4.style.display = "none";
  }
});

isRadioChecked1.addEventListener("input", function () {
  if (isRadioChecked1.checked !== "") {
    jsBlankOutput4.style.display = "none";
  }
});

isChecked.addEventListener("input", function () {
  if (isChecked.checked !== "") {
    jsBlankOutput6.style.display = "none";
  }
});

// Radio style

const isRadioChecked2 = document.querySelector("#query-type-box");

const isRadioChecked3 = document.querySelector("#query-type-box-2");

isRadioChecked2.addEventListener("click", chBackcolor);

isRadioChecked3.addEventListener("click", chBackcolor);

function chBackcolor() {
  const color = "rgba(12, 130, 105, 0.25)";
  if (isRadioChecked2.checked) {
    document.querySelector(".query-box-type").style.background = color;
    document.querySelector(".query-box-type-2").style = "none";
  }

  if (isRadioChecked3.checked) {
    document.querySelector(".query-box-type").style = "none";
    document.querySelector(".query-box-type-2").style.background = color;
  }
}
