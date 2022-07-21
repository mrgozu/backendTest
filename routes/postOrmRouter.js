
const {Router} = require('express');

const { getPosts, postPosts, deletePost } = require('../controllers/postOrmController');
const router = Router();
router.get('/', getPosts);
router.post('/', postPosts);
router.delete('/:id', deletePost);

module.exports = router;