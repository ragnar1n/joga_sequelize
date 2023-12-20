const Sequelize = require("sequelize")
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize')

const models = require('../../models')

const createArticle = (req,res) =>{
    let name = req.body.name
    let slug = req.body.slug
    let image = req.body.image
    let body = req.body.body

    const newArticle = models.Article.create({
        name: name,
        slug: slug,
        image: image,
        body: body,
        published: new Date().toISOString().slice(0,19).replace('T',' ')
    })
        .then(article =>{
            console.log(article)
            return res.status(200).json({message: 'New article added'})
        })
        .catch(error =>{
            return res.status(500).send(error.message)
        })
}
const editArticle = (req,res) =>{
    if (req.method === 'POST'){
        let id = req.params.id
        let name = req.body.name
        let slug = req.body.slug
        let image = req.body.image
        let body = req.body.body
        let author_id = req.body.author_id
        models.Article.update({
            name: name,
            slug: slug,
            image: image,
            body: body,
            author_id: author_id
        }, {
            where: {id: id}
        })
            .then(article =>{
                    return res.status(200).json({message: 'Article updated'})
            })
            .catch(error =>{
                return res.status(500).send(error.message)
            })
    } else{
        models.Article.findByPk(req.params.id, {
            include: [{
                    model: models.Author
                }],
        })
            .then(article =>{
                    return res.status(200).json({article})
            })
            .catch(error =>{
                return res.status(500).send(error.message)
            })
    }
}
const deleteArticle = (req,res) =>{
    if (req.method === 'POST'){
        models.Article.destroy({
            where: {id: req.params.id}
        })
            .then((article) => {
                return res.status(200).json({message: 'Article deleted'})
            })
            .catch((error) => {
                return res.status(500).json({message: error.message})
            })
    }
}

module.exports = {
    createArticle,
    editArticle,
    deleteArticle
}