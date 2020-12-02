const router = require('express').Router();
const postRoutes = require('./postRoutes');
const authRoutes = require('./authRoutes');
const loggedUsers = require('./loggedInRoutes');
// /api/users
router.use('/post', postRoutes);
router.use('/auth', authRoutes);
router.use('/loggedusers', loggedUsers);

module.exports = router;
