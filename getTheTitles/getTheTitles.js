const getTheTitles = function (books) {
  let titles = [];
  for (let i in books) {
    titles.push(books[i].title);
  }
  return titles;
};

module.exports = getTheTitles;
