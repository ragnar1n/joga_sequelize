const express = require('express')
const router = express.Router()
const articleController = require('../controllers/article')
const authorController = require('../controllers/author')

router.get('/', articleController.getAllArticles)
router.get('/article/:slug', articleController.getArticleBySlug)
router.get('/author/:id', authorController.getAuthorArticles)

module.exports = router