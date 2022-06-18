const router = require('express').Router();
const { addThoughts, removeThought, getAllThoughts } = require('../../controllers/thought-controller');

 
// Removea single thought by its _id
// router.route('/:thoughtId/:thoughtId').delete(removeThought);

// GET to get all thoughts
router.route('/').get(getAllThoughts)
// .post(createThoughtById) ;


// POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
// const thoughtRoutes = require('./thought-routes');

// router.use('/thoughts', thoughtRoutes);
// router.use('/user', usersRoutes);

module.exports = router;