import {getStyles} from './changeTextStyles.js';

document.querySelector('.options__download').addEventListener('click', function () {
  createCanvasWithContent();
  downloadCanvasAsJpg();
});

function getTextProperties(element) {
  const styles = getComputedStyle(element);

  return {
    fontFamily: styles.fontFamily,
    fontSize: styles.fontSize,
    color: styles.color,
    fontWeight: styles.fontWeight,
  };
}

function addImageToCanvas(canvas, imageUrl) {
  const ctx = canvas.getContext('2d');
  const image = new Image();
  image.src = imageUrl;
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
}

function addTextToCanvas(canvas, textAreas) {
  const ctx = canvas.getContext('2d');
  textAreas.forEach((textArea) => {
    const text = textArea.value;
    const x = parseFloat(textArea.style.left);
    const y = parseFloat(textArea.style.top);
    const fontSize = getComputedStyle(textArea).fontSize;
    const fontFamily = getComputedStyle(textArea).fontFamily;
    const color = getComputedStyle(textArea).color
    ctx.font = `${fontSize} ${fontFamily}`;
    ctx.fillStyle = `${color}`
    ctx.fillText(text, x, y);
  });
}

function createCanvasWithContent() {
  const divElement = document.querySelector('.editor__meme-area');
  const canvas = document.createElement('canvas');
  canvas.width = divElement.offsetWidth;
  canvas.height = divElement.offsetHeight;
  document.body.appendChild(canvas);

  const imageUrl = divElement.querySelector('img').src;
  addImageToCanvas(canvas, imageUrl);

  const textAreas = Array.from(document.querySelectorAll('textarea'));
  addTextToCanvas(canvas, textAreas);
}


function downloadCanvasAsJpg() {
  const canvas = document.querySelector('canvas');
  const image = canvas.toDataURL('image/jpeg');

  // Создаем ссылку и автоматически кликаем по ней для скачивания
  const a = document.createElement('a');
  a.href = image;
  a.download = 'meme.jpg';
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  document.body.removeChild(canvas)
}