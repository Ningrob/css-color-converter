handleHexToRgb = event => {
  event.preventDefault();
  const inputValue = event.target.hexInput.value;
  const validInputValue = getValidInputValue(inputValue);

  if (!inputValue || validInputValue.length != 6) {
    alert("error");
    return;
  }

  const rgbCode = validInputValue
    .match(/.{1,2}/gi)
    .reduce((acc, item) => acc.concat(parseInt(item, 16)), []);
  const rgbString = `rgb(${rgbCode.join(",")})`;

  setUpRgbFields(rgbCode);
  displayRgbResult(rgbString);
};

getValidInputValue = value => {
  let colorString = value.trim();
  if (value.indexOf("#") != -1) {
    colorString = value.trim().split("#")[1];
  }

  if (colorString.length === 3) {
    colorString = colorString
      .split("")
      .reduce((acc, item) => acc.concat(item + item), [])
      .join("");
  }

  return colorString;
};

displayRgbResult = color => {
  document.querySelector(".toRgb").innerHTML = color;
};

setUpRgbFields = rgbCode => {
  Object.keys(COLOR_FIELDS).forEach(
    (color, index) =>
      (document.querySelector(`.${COLOR_FIELDS[color]}`).value = rgbCode[index])
  );
};

const COLOR_FIELDS = {
  RED: "red",
  GREEN: "green",
  BLUE: "blue"
};
