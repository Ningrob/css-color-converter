handleHexToRgb = event => {
  event.preventDefault();
  const inputValue = event.target.hexInput.value;
  const validInputValue = getValidInputValue(inputValue);

  if (!validInputValue) {
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

  const isInvalidColor = colorString
    .match(/.{1,1}/g)
    .some(item => isNaN(parseInt(item, 16)));

  if (colorString.length != 6 || isInvalidColor) {
    return null;
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
