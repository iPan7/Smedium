const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const authRoutes = require('./authRoutes');

// /api/users
router.use('/api', apiRoutes);
router.use('/auth', authRoutes);

module.exports = router;


// const router = require('express').Router();
// const apiRoutes = require('./apiRoutes');
// const postRoutes = require('./postRoutes');
// const authRoutes = require('./authRoutes');

// // /api/users
// router.use('/api', apiRoutes);
// router.use('/auth', authRoutes);
// router.use('/post', postRoutes);

// module.exports = router;
