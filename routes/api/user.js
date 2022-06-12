
// GET all users

// GET a single user by its _id and populated thought and friend data

// POST a new user:

// PUT to update a user by its _id

// DELETE to remove user by its _id

const router = require('express').Router();
const { addThoughs, removeThoughts } = require('../../controllers/user-controller');

// GET to get all users
router.route('/:userId').post(addUser);

// Removea single user by its _id
router.route('/:userId/:userId').delete(removeUser);

const usertRoutes = require('./user-routes');

router.use('/user', userRoutes);

module.exports = router;