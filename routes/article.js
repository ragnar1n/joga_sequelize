const express = require('express')
const router = express.Router()
const articleController = require('../controllers/article')
const authorController = require('../controllers/author')
const articleAdminController = require('../controllers/admin/article')

router.get('/', articleController.getAllArticles)
router.get('/article/:slug', articleController.getArticleBySlug)
router.get('/author/:id', authorController.getAuthorArticles)
router.post('/admin/article/create', articleAdminController.createArticle)
router.all('/admin/article/edit/:id', articleAdminController.editArticle)
router.post('/admin/article/delete/:id', articleAdminController.deleteArticle)

module.exports = router