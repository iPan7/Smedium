const router = require('express').Router();
const postRoutes = require('./postRoutes');
const authRoutes = require('./authRoutes');
// /api/users
router.use('/post', postRoutes);
router.use('/auth', authRoutes);

module.exports = router;
