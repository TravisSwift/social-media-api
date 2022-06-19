const { Thought } = require('../models/');

const thoughtController = {
   
    getAllThoughts(req, res) {
      Thought.find({})
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    },
  
    // get one thought by id
    getThoughtById({ params }, res) {
     Thought.findOne({ _id: params.thoughtId })
        .then(dbThoughtData => {
          // If no though is found, send 404
          if (!dbThoughtData) {
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
    removeThoughtById({ params }, res) {
      Thought.findByIdAndRemove(params.thoughtId)
        .then(dbThoughtData => {
          // If no thought is found, send 404
          if (!dbThoughtData) {
            res.status(404).json({ message: 'Thought has been deleted!' });
            return;
          }
          res.json(dbThoughtData);
        })
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    },
            // Post one thought by id
            createThoughtById({ body }, res) {
              Thought.create(body)
                .then(dbThoughtData => {
                  res.json(dbThoughtData);
                })
                .catch(err => {
                  console.log(err);
                  res.status(400).json(err);
                });
            },

            // update thought by id
updateThoughtById({ params, body }, res) {
  Thought.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
    .then(dbThoughtData => {
      if (!dbThoughtData) {
        res.status(404).json({ message: 'No thought found with this id!' });
        return;
      }
      res.json(dbThoughtData);
    })
    .catch(err => res.status(400).json(err));
},
  }

module.exports = thoughtController;