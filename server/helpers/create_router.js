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

  return router;
};

module.exports = createRouter;