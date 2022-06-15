const { User } = require('../models');

const userController = {
   
    getAllUsers(req, res) {
      User.find({})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    },
  
    // get one user by id
    getUserById({ params }, res) {
      User.findOne({ _id: params.userId })
        .then(dbUserData => {
          // If no user is found, send 404
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
    removeUserById({ params }, res) {
      User.findByIdAndRemove(params.userId)
        .then(dbUserData => {
          // If no user is found, send 404
          if (!dbUserData) {
            res.status(404).json({ message: 'User has been deleted!' });
            return;
          }
          res.json(dbUserData);
        })
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    },
    
        // Post one user by id
        createUserById({ body }, res) {
          User.create(body)
            .then(dbUserData => {
              res.json(dbUserData);
            })
            .catch(err => {
              console.log(err);
              res.status(400).json(err);
            });
        },

  }

module.exports = userController;