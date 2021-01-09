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
    const id = req.params.id;
    collection.findOne({ _id: ObjectID(id) })
    .then((doc) => res.json(doc))
  });

  return router;
};

module.exports = createRouter;