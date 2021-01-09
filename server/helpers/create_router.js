const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (collection) {

  const router = express.Router();

  //INDEX
  router.get('/', (req, res) => {
    collection.find()
    .toArray()
    .then((result) => {
      res.json(result);
    })
  });

  //SHOW
  router.get('/:id', (req, res) => {
    console.log("Sanity Check complete")
  });

  return router;
};

module.exports = createRouter;