const router = require('express').Router();

const {
      findUsersByLoggedInUserApi,
      findUserIdByUsernameApi,
} = require('../../controllers/loggedControllers');

const authMiddleware = require('../../middlewares/authorizationMiddleware');

router.route('/')
    .get(findUsersByLoggedInUserApi);

router.route('/:username')
    .get(findUserIdByUsernameApi);

module.exports = router;