const { Thoughts } = require('../models');

const userController = {
   
    getAllThoughts(req, res) {
      User.find({})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    },
  
    // get one user by id
    getThoughtsById({ params }, res) {
      User.findOne({ _id: params.id })
        .then(dbThoughtsData => {
          // If no user is found, send 404
          if (!dbThoughtsData) {
            res.status(404).json({ message: 'No Thoughts found with this id!' });
            return;
          }
          res.json(dbThoughtData);
        })
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    },
  }

module.exports = thoughtController;