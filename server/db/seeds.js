use players;
db.dropDatabase();

db.scores.insertMany([
  {
    playerName: 'Jack Sparrow',
    score: 30,
  },
  {
    playerName: 'Captain Hook',
    score: 14,
  },
  {
    playerName: 'Mr Smee',
    score: 35,
  },
  {
    playerName: 'Davy Jones',
    score: 56,
  },
  {
    playerName: 'John Silver',
    score: 60,
  },
  {
    playerName: 'Edward Teach',
    score: 99,
  },
  {
    playerName: 'Anne Bonny',
    score: 23,
  }
  {
    playerName: 'Black Beard',
    score: 9001,
  }
  {
    playerName: 'Captain Kid',
    score: 100,
  }
  {
    playerName: 'Calico Jack',
    score: 85,
  }
]);