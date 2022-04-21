const repo = require('../db/candidatesRepository')

/**
 * @method index       lister les candidats (accueil du controlleur)
 * @method getById     afficher les détails d'un candidat
 * @method add         ajouter un nouveau candidat
 * @method update      modifier un candidat existant
 * @method remove      supprimer un candidat existant
 */
module.exports = {

    /**
     * GET /candidates
     * Affiche la liste des candidats
     * @param {Request} req 
     * @param {Response} res 
     */
    async index(req, res) {
        try {
            let result = await repo.getAll()
            res.render('index', { model : result, title: 'Liste des candidats' })
        } catch (err) {
            res.status(500).end()
        }        
    },

    /**
     * GET /candidates/:id
     * Affiche un candidat ou erreur 404 si identifiant inexistant
     * @param {Request} req 
     * @param {Response} res 
     */
    async getById(req, res) {
        try {
            let result = await repo.getById(req.params.id)
            res.render('candidate', { model : result, title: 'Fiche candidat' })
        } catch (err) {
            res.status(500).end()
        }  
    },

    /**
     * GET /candidates/add
     * Affiche le formulaire permettant d'ajouter un candidat 
     * @param {Request} req 
     * @param {Response} res 
     */
     async add(req, res) {
        res.render('candidate_add')
    },

    /**
     * GET /candidates/edit/:id
     * Affiche le formulaire permettant de modifier un candidat 
     * @param {Request} req 
     * @param {Response} res 
     */
     async update(req, res) {
        let result = await repo.getById(req.params.id)
        res.render('candidate_edit', { model : result })
    },

    /**
     * GET /candidates/delete/:id
     * Affiche la page de confirmation de suppression d'un candidat 
     * @param {Request} req 
     * @param {Response} res 
     */
    async remove(req, res) {
        let result = await repo.getById(req.params.id)
        res.render('candidate_delete', { model : result })
    }
}