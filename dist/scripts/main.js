'use strict';

function init(field) {
  const ball = field.querySelector('.ball');
  let maxX = field.clientWidth - ball.offsetWidth;
  let maxY = field.clientHeight - ball.offsetHeight;

  ball.addEventListener('load', () => {
    maxX = field.clientWidth - ball.offsetWidth;
    maxY = field.clientHeight - ball.offsetHeight;
  });

  field.addEventListener('click', (evt) => {
    const fieldPosition = field.getBoundingClientRect();

    const fieldX = fieldPosition.left + field.clientLeft;
    const fieldY = fieldPosition.top + field.clientTop;

    let x = evt.clientX - fieldX - ball.offsetWidth / 2;
    let y = evt.clientY - fieldY - ball.offsetHeight / 2;

    if (x < 0) {
      x = 0;
    }

    if (x > maxX) {
      x = maxX;
    }

    if (y < 0) {
      y = 0;
    }

    if (y > maxY) {
      y = maxY;
    }

    ball.style.top = `${y}px`;
    ball.style.left = `${x}px`;
  });
}

for (const element of document.querySelectorAll('.field')) {
  init(element);
}
