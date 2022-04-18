/**
 * In the first exercise we'll start you off simple — we have an array of greeting card messages,
 * but we want to sort them to list just the Christmas messages.
 */
//- const list = document.querySelector('.output ul');
//- list.innerHTML = '';
const greetings = ['Happy Birthday!',
                 'Merry Christmas my love',
                 'A happy Christmas to all the family',
                 'You\'re all I want for Christmas',
                 'Get well soon'];

for (let greeting of greetings) {
  // Your conditional test needs to go inside the parentheses
  // in the line below, replacing what's currently there
  if (greeting.toLowerCase().includes('christmas') ) {
    //- const listItem = document.createElement('li');
    //- listItem.textContent = greeting;
    //- list.appendChild(listItem);
    console.log(greeting);
  }
}
