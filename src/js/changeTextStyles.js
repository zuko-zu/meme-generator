export function toggleOptionInputVisabilitie(text) {
const optionInputs = document.querySelectorAll('.options__inputs .input')

  text.addEventListener('focus', function() {
    text.classList.add('active');
    optionInputs.forEach((input) => {
      input.removeAttribute('disabled');
    })

  document.addEventListener('click', function(e) {
    console.log(e.target)
    if (e.target.classList.contains('options__input')) return
    optionInputs.forEach((input) => {
        input.setAttribute('disabled', '');
        text.classList.remove('active');
    })
  });
});
}

export function getStyles () {
  const fontFamily = document.querySelector('#fontFamily').value;
  const fontSize = document.querySelector('#fontSize').value;
  const color = document.querySelector('#color').value;
  return {
    fontFamily: fontFamily,
    fontSize: fontSize,
    color: color
  }
}

export function changeTextStyle() {
  const newStyles = getStyles();
  const text = document.querySelector('.active')
  text.style.fontFamily = newStyles.fontFamily;
  text.style.fontSize = newStyles.fontSize + 'px';
  text.style.color = newStyles.color;
}

const optionInputs = document.querySelectorAll('.options__inputs .input')

optionInputs.forEach((option) => {
  option.addEventListener('change', changeTextStyle)
})