// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals#active_learning_more_color_choices

const select = document.querySelector('#switchCaseColorChoice #themeColorChoice');
const html = document.querySelector('#switchCaseColorChoice');

select.addEventListener('change', () => {
  const choice = select.value;

  // ADD SWITCH STATEMENT
  switch (choice) {
    case 'white':
      update('white', 'black');
      break;
    case 'black':
      update('black', 'white');
      break;
    case 'purple':
      update('purple', 'white');
      break;
    case 'yellow':
      update('yellow', 'darkgray');
      break;
    case 'psychedelic':
      update('lime', 'purple');
      break;
    default:
      update('white', 'black');
  }
});

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}
