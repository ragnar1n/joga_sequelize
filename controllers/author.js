const Sequelize = require("sequelize")
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize')

const models = require('../models')

const getAuthorArticles = (req,res) =>{
    models.Author.findAll({
        where:{
            id: req.params.id
        },
        include: [{
            model: models.Article
        }],
    })
        .then(articles =>{
            console.log(articles)
            return res.status(200).json({articles})
        })
        .catch(error =>{
            return res.status(500).send(error.message)
        })
}

module.exports = {
    getAuthorArticles,
}