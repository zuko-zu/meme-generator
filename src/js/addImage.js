function getUserFile() {
  return new Promise((resolve, reject) => {
    const input = document.createElement('input');
    input.type = 'file';

    input.addEventListener('change', () => {
      const file = input.files[0];
      if (file) {
        resolve(file);
      } else {
        reject("Пользователь не выбрал файл.");
      }
      input.remove();
    });

    input.style.display = 'none';
    document.body.appendChild(input);
    input.click();
  });
}

function updateMeme(file) {
  const imgURL = URL.createObjectURL(file);
  const memeArea = document.querySelector('.editor__meme-area');
  memeArea.innerHTML = "";
  const memeImg = document.createElement('img');
  memeImg.classList.add('editor__meme');
  memeImg.src = imgURL;
  memeImg.alt = "Шаблон мема";
  console.log(memeImg);
  memeArea.appendChild(memeImg);
}

async function hangleAddMemeBtn() {
  const file = await getUserFile();
  updateMeme(file);
}

const addMemeBtn = document.querySelector('.options__add-template');
const addTextBtn = document.querySelector('.options__add-text');
const optionBtns = document.querySelectorAll('.options__buttons .button');

addMemeBtn.addEventListener('click', () => {
  hangleAddMemeBtn();
    optionBtns.forEach((btn) => {
      btn.removeAttribute('disabled');
    })
})