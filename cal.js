let inputFocus = 0;

function reset() {
  document.getElementById("fnumber").value = "";
  document.getElementById("snumber").value = "";
  document.getElementById("result").innerHTML = "";
}

function backspace() {
  let fnumber = document.getElementById("fnumber");
  let snumber = document.getElementById("snumber");
  if (inputFocus == 0) {
    fnumber.value = fnumber.value.slice(0, -1);
  } else {
    snumber.value = snumber.value.slice(0, -1);
  }
}
function sum() {
  let fnumber = parseFloat(document.getElementById("fnumber").value);
  let snumber = parseFloat(document.getElementById("snumber").value);
  let result = document.getElementById("result");

  if (fnumber && snumber) {
    result.style.color = "aqua";
    result.innerHTML = fnumber + snumber;
  } else {
    result.innerHTML = "Please enter number";
    result.style.color = "red";
  }
}

function percentage() {
  let fnumber = parseFloat(document.getElementById("fnumber").value);
  let snumber = parseFloat(document.getElementById("snumber").value);
  let result = document.getElementById("result");

  if (fnumber && snumber) {
    result.style.color = "aqua";
    result.innerHTML = (fnumber * snumber) / 100;
  } else {
    result.style.color = "red";
    result.innerHTML = "Please enter number";
  }
}

function minus() {
  let fnumber = parseInt(document.getElementById("fnumber").value);
  let snumber = parseInt(document.getElementById("snumber").value);
  let result = document.getElementById("result");

  if (fnumber && snumber) {
    result.style.color = "aqua";
    result.innerHTML = fnumber - snumber;
  } else {
    result.innerHTML = "Please enter number";
    result.style.color = "red";
  }
}
function multiply() {
  let fnumber = parseInt(document.getElementById("fnumber").value);
  let snumber = parseInt(document.getElementById("snumber").value);
  let result = document.getElementById("result");

  if (fnumber && snumber) {
    result.style.color = "aqua";
    result.innerHTML = fnumber * snumber;
  } else {
    result.innerHTML = "Please enter number";
    result.style.color = "red";
  }
}

function divide() {
  let fnumber = parseInt(document.getElementById("fnumber").value);
  let snumber = parseInt(document.getElementById("snumber").value);
  let result = document.getElementById("result");

  if (fnumber && snumber) {
    result.style.color = "aqua";
    result.innerHTML = fnumber / snumber;
  } else {
    result.innerHTML = "Please enter number";
    result.style.color = "red";
  }
}

function changeFocus(id) {
  if (id == "fnum") {
    inputFocus = 0;
  } else {
    inputFocus = 1;
  }
}
function addValueToInput(num) {
  let finput = document.getElementById("fnumber");
  let sinput = document.getElementById("snumber");
  let value = finput.value;
  let svalue = sinput.value;
  if (value == "" && num == 0) {
  } else {
    if (inputFocus == 0) {
      finput.value = value + num;
    }
    if (inputFocus == 1) {
      sinput.value = svalue + num;
    }
  }
}
