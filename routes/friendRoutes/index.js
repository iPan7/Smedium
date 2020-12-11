const router = require('express').Router();

const {
	findFriendsByUser,
	findFriendById,
	insertFriendByUser,
	deleteFriendById
} = require('../../controllers/friendController');

router.route('/')
	.get(findFriendsByUser);

router.route('/newfriend')
	.post(insertFriendByUser);

router.route('/:friendId')
	.get(findFriendById)
	.delete(deleteFriendById);

module.exports = router;