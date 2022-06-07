const { User } = require('../models');

const userController = {
  // the functions will go in here as methods
};


const userController = {
   
    getAllUsers(req, res) {
      User.find({})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    },
  
    // get one pizza by id
    getUserById({ params }, res) {
      User.findOne({ _id: params.id })
        .then(dbUserData => {
          // If no pizza is found, send 404
          if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id!' });
            return;
          }
          res.json(dbUserData);
        })
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    },
  }

module.exports = userController;