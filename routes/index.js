const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const authRoutes = require('./authRoutes');

// /api/users
router.use('/api', apiRoutes);
router.use('/auth', authRoutes);

module.exports = router;



// NEW CODE BUT CRASHES THE APP

// const router = require('express').Router();
// const apiRoutes = require('./apiRoutes');
// const postRoutes = require('./postRoutes');
// const authRoutes = require('./authRoutes');

// // /api/users
// router.use('/api', apiRoutes);
// router.use('/auth', authRoutes);
// route.use('/post', postRoutes);

// module.exports = router;
