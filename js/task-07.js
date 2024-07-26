const fontSizeControl = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");

function updateFontSize() {
  const fontSize = fontSizeControl.value;
  textSpan.style.fontSize = `${fontSize}px`;
}

fontSizeControl.addEventListener("input", updateFontSize);

console.log(updateFontSize);
