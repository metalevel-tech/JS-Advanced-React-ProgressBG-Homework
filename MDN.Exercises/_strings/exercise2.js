/**
 * In this exercise we have the names of cities in the United Kingdom,
 * but the capitalization is all messed up. We want you to change them
 * so that they are all lower case, except for a capital first letter. 
 */
//- const list = document.querySelector('.output ul');
//- list.innerHTML = '';
const cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

for (let city of cities) {
  // write your code just below here
  city = city.toLowerCase();
  let firstLetter = city[0].toUpperCase();
  city = city.replace(/^./, firstLetter);

  const result = city;
  //- const listItem = document.createElement('li');
  //- listItem.textContent = result;
  //- list.appendChild(listItem);
  console.log(result);
}
/** 
 * MDN's solution
for (let city of cities) {
    // write your code just below here
    const lower = city.toLowerCase();
    const firstLetter = lower.slice(0,1);
    const capitalized = lower.replace(firstLetter,firstLetter.toUpperCase());
    const result = capitalized;
    const listItem = document.createElement('li');
    listItem.textContent = result;
    list.appendChild(listItem);
  }
  */
