import {makeElementMovable} from './dragAndDrop.js';
import {toggleOptionInputVisabilitie} from './changeTextStyles.js';
const addTextBtn = document.querySelector('.options__add-text');
const memeArea = document.querySelector('.editor__meme-area');

function addText() {
  const newText = document.createElement('textarea')
  newText.classList.add('editor__meme-text', 'meme-text')
  newText.innerText = 'Напишите здесь свой текст';
  makeElementMovable(newText)
  newText.focus = true
  memeArea.insertAdjacentElement('afterbegin', newText);
  toggleOptionInputVisabilitie(newText)
}



addTextBtn.addEventListener("click", addText)