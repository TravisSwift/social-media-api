const router = require('express').Router();
const { addThoughs, removeThoughts } = require('../../controllers/thought-controller');

// GET to get all thoughts
router.route('/:thoughtId').post(addThoughts);

// Removea single thought by its _id
router.route('/:thoughtId/:thoughtId').delete(removeThought);


// POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
const thoughtRoutes = require('./thought-routes');

router.use('/thoughts', thoughtRoutes);
router.use('/user', usersRoutes);

module.exports = router;