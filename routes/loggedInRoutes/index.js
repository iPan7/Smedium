const router = require('express').Router();

const {
      findUsersByLoggedInUserApi
} = require('../../controllers/loggedControllers');

const authMiddleware = require('../../middlewares/authorizationMiddleware');

// router.use(authMiddleware);

// /api/loggedusers
router.route('/')
    .get(findUsersByLoggedInUserApi);

module.exports = router;