// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals#active_learning_a_simple_calendar

(function() {
  const select = document.querySelector('#simpleCalendar select');
  const list = document.querySelector('#simpleCalendar ul');
  const h1 = document.querySelector('#simpleCalendar h1#month');
  
  select.addEventListener('change', () => {
    const choice = select.value;
  
    // ADD CONDITIONAL HERE
    let days = 31;
    if (choice === 'February') days = 28;
    if (choice === 'September' || choice === 'April' || choice === 'June') days = 30;
      
    createCalendar(days, choice);
  });
  
  function createCalendar(days, choice) {
    list.innerHTML = '';
    h1.textContent = choice;
    for (let i = 1; i <= days; i++) {
      const listItem = document.createElement('li');
      listItem.textContent = i;
      list.appendChild(listItem);
    }
  }
  
  createCalendar(31,'January');
})();
