// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals#a_switch_example

(function() {
  const select = document.querySelector('#ternary select.ternary');
  const html = document.querySelector('#ternary');
  document.body.style.padding = '10px';
  
  function update(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
  }
  
  select.addEventListener('change', () => ( select.value === 'black' ) ? update('black','white') : update('white','black'));
})();