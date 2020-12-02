const router = require('express')
  .Router();

const {
  signInApi,
  signUpApi,
  signOutApi
} = require('../../controllers/authController');

// /auth prepended to everything
const signInMiddleware = require('../../middlewares/signInMiddleware');
const authMiddleware = require('../../middlewares/authorizationMiddleware');
// /auth/signin

router.post('/signin', signInMiddleware, signInApi);
router.post('/signup', signUpApi);
router.post('/signout', authMiddleware, signOutApi);

module.exports = router;
