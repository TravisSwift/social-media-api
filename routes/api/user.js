
// GET all users

// GET a single user by its _id and populated thought and friend data

// POST a new user:

// PUT to update a user by its _id

// DELETE to remove user by its _id

const router = require('express').Router();
const { getAllUsers, getUserById, removeUserById, createUserById} = require('../../controllers/user-controller');

// GET to get all users
router.route('/').get(getAllUsers).post(createUserById) ;


// Removea single user by its _id
router.route('/:userId').delete(removeUserById).get(getUserById);

module.exports = router;