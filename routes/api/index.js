const router = require('express').Router();
const pizzaRoutes = require('./users-routes');

router.use('/user', userRoutes);

module.exports = router;