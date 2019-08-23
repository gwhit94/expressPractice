const express = require('express');
const router = express.Router();
const posts = require('../posts.json')

router.get('/', (req, res, next) => res.send(posts));
router.get('/:userId', (req, res, next) => {
    let postsById = posts.filter(p => p.userId == req.params.userId);
    res.send(postsById);
});

module.exports = router;