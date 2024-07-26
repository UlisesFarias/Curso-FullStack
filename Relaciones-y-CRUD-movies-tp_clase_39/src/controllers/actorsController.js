const db = require('../database/models');
const sequelize = db.sequelize;


const actorsController = {
    list: (req, res) => {
        db.Actor.findAll({
            include: ['movies']
        })
            .then(actors => {
                res.render('actorsList.ejs', {actors})
            })
    },
    detail: (req, res) => {
        db.Actor.findByPk(req.params.id,{
            include : ['movies','favorite']
        })
            .then(actor => {
                res.render('actorsDetail.ejs', {actor});
            });
    }

}

module.exports = actorsController;