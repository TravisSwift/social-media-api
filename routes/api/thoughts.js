const router = require('express').Router();
const { removeThoughtById, getAllThoughts, createThoughtById, getThoughtById, updateThoughtById } = require('../../controllers/thought-controller');

// GET to get all thoughts
router.route('/').get(getAllThoughts)

// .post(createThoughtById) ;
router.route('/').post(createThoughtById)

// .delete(removeThoughtById) ;
router.route('/:thoughtId').delete(removeThoughtById).get(getThoughtById)

// .put(updateThoughtById) ;
router.route('/:thoughtId').put(updateThoughtById).get(getThoughtById)


module.exports = router;