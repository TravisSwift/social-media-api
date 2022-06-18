const router = require('express').Router();
const userRoutes = require('./user');
const userThoughts = require('./thoughts');

router.use('/user', userRoutes);
router.use('/thoughts', userThoughts);

module.exports = router;