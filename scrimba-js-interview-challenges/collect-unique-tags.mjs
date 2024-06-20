import mediaData from "./collect-unique-tags.data.mjs";

/* Find All Unique Tags

As a software dev at ScrimFlix, you're working on a feature
to let users browse TV shows by tag. The first step is to collect all
the tags from our data into a new array. Then we'll need
to filter out the duplicate tags.

Write a function that takes in the media data and returns
a flat array of unique tags.

Expected output:
["supernatural", "horror", "drama",
"fantasy", "reality", "home improvement", "comedy", "sci-fi", "adventure"]

*/

function getUniqueTagsForInLoop(data) {
  const unqTagsTrack = {};
  const unqTagsList = [];

  data
    .map(({ tags }) => tags)
    .flat()
    .forEach((tag) => {
      unqTagsTrack[tag] = true;
    });

  for (const key in unqTagsTrack) {
    unqTagsList.push(key);
  }

  return unqTagsList;
}
console.log(getUniqueTagsForInLoop(mediaData));

function getUniqueTagsObjectKeys(data) {
  const unqTagsTrack = {};
  const unqTagsList = [];

  data
    .map(({ tags }) => tags)
    .flat()
    .forEach((tag) => {
      unqTagsTrack[tag] = true;
    });

  return Object.keys(unqTagsTrack);
}
console.log(getUniqueTagsObjectKeys(mediaData));

function getUniqueTagsWithFilter(data) {
  const unqTagsTrack = {};

  return data
    .map(({ tags }) => tags)
    .flat()
    .filter((tag) => {
      if (!unqTagsTrack[tag]) {
        unqTagsTrack[tag] = true;
        return true;
      }
      return false;
    });
}
console.log(getUniqueTagsWithFilter(mediaData));
