'use strict';

module.exports = year => {
  let hashtags = [];
  try {
    hashtags = require(`./hashtags/${year}.json`);
  } catch {
    return;
  }

  const letters = {
    first: [],
    second: [],
    third: []
  };

  for (const hashtag of hashtags) {
    const splitted = hashtag.split('');
    Object.keys(letters).forEach((char, idx) => {
      if (!letters[char].includes(splitted[idx + 1])) {
        letters[char].push(splitted[idx + 1]);
      }
    });
  }

  for (const [list] of Object.entries(letters)) {
    letters[list].sort();
  }

  return `#([${letters.first.join('')}][${letters.second.join('')}][${letters.third.join('')}]){2}`;
};
