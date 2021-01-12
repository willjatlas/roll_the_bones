use players;
db.dropDatabase();

db.scores.insertMany([
  {
    playerName: 'Jack Sparrow',
    score: 12,
  },
  {
    playerName: 'Captain Hook',
    score: 4,
  },
  {
    playerName: 'Mr Smee',
    score: 9,
  },
  {
    playerName: 'Davy Jones',
    score: 7,
  },
  {
    playerName: 'John Silver',
    score: 21,
  },
  {
    playerName: 'Edward Teach',
    score: 13,
  },
  {
    playerName: 'Anne Bonny',
    score: 17,
  },
  {
    playerName: 'Black Beard',
    score: 9001,
  },
  {
    playerName: 'Captain Kid',
    score: 100,
  },
  {
    playerName: 'Calico Jack',
    score: 85,
  }
]);