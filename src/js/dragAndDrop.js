export function makeElementMovable(element) {
  element.onmousedown = function(e) {
    const coords = getCoords(element);
    const shiftX = e.pageX - coords.left;
    const shiftY = e.pageY - coords.top;

    element.style.zIndex = 1000;
    memeArea.append(element);

    moveAt(e);

    function moveAt(e) {
      const maxX = memeArea.clientWidth - element.offsetWidth;
      const maxY = memeArea.clientHeight - element.offsetHeight;
      
      let newLeft = e.pageX - shiftX;
      let newTop = e.pageY - shiftY;
      
      // Ограничиваем перемещение в рамках контейнера
      if (newLeft < 0) {
        newLeft = 0;
      } else if (newLeft > maxX) {
        newLeft = maxX;
      }
      
      if (newTop < 0) {
        newTop = 0;
      } else if (newTop > maxY) {
        newTop = maxY;
      }

      element.style.left = newLeft + 'px';
      element.style.top = newTop + 'px';
    }

    memeArea.onmousemove = function(e) {
      moveAt(e);
    };

    element.onmouseup = function() {
      memeArea.onmousemove = null;
      element.onmouseup = null;
    };

    element.ondragstart = function() {
      return false;
    };

    function getCoords(elem) {
      const box = getComputedStyle(elem);
      return {
        top: parseFloat(box.top),
        left: parseFloat(box.left)
      };
    }
  };
}

const memeArea = document.querySelector('.editor__meme-area');
const movableElements = memeArea.querySelectorAll('.editor__meme-text');
movableElements.forEach(makeElementMovable);