// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays#active_learning_printing_those_products

//- const list = document.querySelector('.output ul');
//- const totalBox = document.querySelector('.output p');
let total = 0;
//- list.innerHTML = '';
//- totalBox.textContent = '';
// number 1
let items = ['Underpants:6.99','Socks:5.99','T-shirt:14.99','Trousers:31.99','Shoes:23.99'];

// number 2
for (let item of items) {
  
  // number 3
  item = item.split(':');

  // number 4
  total += Number(item[1]);

  // number 5
  let itemText = `${item[0]}   \t${item[1]}`;

  console.log(itemText);
  //- const listItem = document.createElement('li');
  //- listItem.textContent = itemText;
  //- list.appendChild(listItem);

// number 6
}

console.log(`Total: ${(' ').repeat(7)}$ ${total.toFixed(2)}`);
//- totalBox.textContent = 'Total: $' + total.toFixed(2);
