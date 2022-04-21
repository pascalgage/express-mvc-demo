/* 
    index    lister les candidats (accueil du controlleur)
    getById    afficher les détails d'un candidat
    add    ajouter un nouveau candidat
    update    modifier un candidat existant
    remove    supprimer u ncandidat existant
*/

const repo = require('../db/candidatesRepository')

module.exports = {
    async index(req, res) {

        try {
            let result = await repo.getAll()
            res.render('index', { model : result, title: 'Liste des candidats' })
        } catch (err) {
            res.status(500).end()
        }

        
    },

    getById(req, res) {

    },

    add(req, res) {

    },

    update(req, res) {

    },

    remove(req, res) {

    }
}