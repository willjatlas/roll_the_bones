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

  //CREATE
  router.post('/', (req, res) => {
    const newPlayer = req.body;
    collection.insertOne(newPlayer)
    .then((result) => {
      res.json(result.ops[0])
    })
  })

  //UPDATE
  router.put('/:id', (req, res) => {
    const id = req.params.id;
    const updateData = req.body;
    collection.updateOne({ _id: ObjectID(id) }, { $set: updateData })
    .then((result) => {
      res.json(result)
    });
  });

  //DELETE
  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    collection.deleteOne({ _id: ObjectID(id) })
    .then((result) => {
      res.json(result);
    });
  })
  
  return router;
};

module.exports = createRouter;