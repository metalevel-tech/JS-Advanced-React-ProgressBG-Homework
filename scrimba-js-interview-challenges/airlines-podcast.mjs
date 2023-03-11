import podcasts from "./airlines-podcast.data.mjs";

/* Welcome Aboard Scrimba Airlines 

Our Scrimba Airlines in-flight entertainment package 
includes a variety of podcasts. We need to add a feature that suggests
podcasts to our patrons based on whether a flight is short or long. 

Your sort function should take two arguments: the podcast data and
flight length. If the flight is 60 minutes or less, sort the podcast list 
from shortest to longest. If it's anything else, sort from longest
to shortest. 

Your function shouldn't return anything. Instead log a numbered list 
of the title and duration of 
each podcast to the console, like this:

1. Crime Fan, 150 minutes
2. Mythical Creatures, 99 minutes
3. Crime Crime Crime, 70 minutes
4. Coding Corner, 55 minutes
5. Scrimba Podcast, 50 minutes
6. Something about Witches, 35 minutes

*/

// Filter by the flight duration
function filterByDuration(data, flightLength) {
  return data
    .filter(({ duration }) => duration <= flightLength)
    .sort((b, a) => a.duration - b.duration)
    .map(({ title, duration }, i) => ({ i, title, duration }))
    .forEach(({ i, title, duration }) => {
      console.log(`${i + 1}. ${title}, ${duration} minutes`);
    });
}
filterByDuration(podcasts, 120);

console.log("*".repeat(30));

// Just order according by the flight duration
function sortByDuration(data, flightLength) {
  const lengthBase = 60;

  return data
    .sort((a, b) => {
      if (flightLength > lengthBase) return b.duration - a.duration;
      return a.duration - b.duration;
    })
    .map(({ title, duration }, i) => ({ i, title, duration }))
    .forEach(({ i, title, duration }) => {
      console.log(`${i + 1}. ${title}, ${duration} minutes`);
    });
}

sortByDuration(podcasts, 120);
