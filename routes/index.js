const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const postRoutes = require('./postRoutes');
const authRoutes = require('./authRoutes');
// /api/users
router.use('/api', apiRoutes); // TODO delete
router.use('/post', postRoutes);
router.use('/auth', authRoutes);

module.exports = router;
