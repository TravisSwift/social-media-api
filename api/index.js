const router = require('express').Router();
const pizzaRoutes = require('./user-routes');

router.use('/user', userRoutes);

module.exports = router;