const router = require('express').Router();

const postRoutes = require('./postRoutes');
const authRoutes = require('./authRoutes');
const loggedUsers = require('./loggedInRoutes');
const commentRoutes = require('./commentRoutes');
const friendRoutes= require('./friendRoutes');

// /api/users
router.use('/post', postRoutes);
router.use('/auth', authRoutes);
router.use('/loggedusers', loggedUsers);
router.use('/comments', commentRoutes);
router.use('/friends', friendRoutes)

module.exports = router;
