/**
 * In this last exercise, the array contains a bunch of strings containing information about train stations in the North of England.
 * 
 * MAN675847583748sjt567654;Manchester Piccadilly >> MAN: Manchester Piccadilly
 */

//- const list = document.querySelector('.output ul');
//- list.innerHTML = '';
const stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                'GNF576746573fhdg4737dh4;Greenfield',
                'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                'SYB4f65hf75f736463;Stalybridge',
                'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for (let station of stations) {
// write your code just below here
let code = station.slice(0,3) + ': ';
let semicolonIndex = station.indexOf(';');
let name = station.slice(semicolonIndex + 1);

station = code + name;
const result = station;
//- const listItem = document.createElement('li');
//- listItem.textContent = result;
//- list.appendChild(listItem);
console.log(result);
}
 