function handleHexToRgb(event) {
  event.preventDefault();
  console.log(event.target.hexInput.value);
  let rgbCode = event.target.hexInput.value
    .match(/.{1,2}/gi)
    .reduce((acc, item, index, allItem) => {
      if (index === allItem.length - 1) {
        return (acc += `${parseInt(item, 16)})`);
      } else {
        return (acc += `${parseInt(item, 16)}, `);
      }
    }, "rgb(");
  document.querySelector(".toRgb").innerHTML = rgbCode;
}
