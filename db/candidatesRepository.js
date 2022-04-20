const db = require('./index')

/**
 * Retourne la liste des candidats
 * @returns {Promise} le jeu de résultats dans un tableau
 */
exports.getAll = () => {
    return new Promise((resolve, reject) => {
        db.all("SELECT id, lastname, firstname, slogan FROM candidates", [], (err, rows) => {
            if(err) {
                console.error('Erreur SQL : ' + err)
                reject(err)
            } else { 
                //console.log(rows)
                resolve(rows)
            }
        })
    })
}

/**
 * Retourne un candidat 
 * @param {Int} id Identifiant du candidat à retourner 
 * @returns {Promise} le candidat sous forme d'objet ou undefined si identifiant inexistant
 */
exports.getById = (id) => {
    return new Promise((resolve, reject) => {
        db.get("SELECT id, lastname, firstname, slogan FROM candidates WHERE id=?", [id], (err, rows) => {
            if(err) {
                console.error('Erreur SQL : ' + err)
                reject(err)
            } else { 
                //console.log(rows)
                resolve(rows)
            }
        })
    })
}

/**
 * Crée un candidat
 * @param {Object} model { lastname: String, firstname: String, slogan: String }
 * @returns {Promise}
 */
exports.create = (model) => {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO candidates (lastname, firstname, slogan) VALUES (?, ?, ?)`
        const params = [model.lastname, model.firstname, model.slogan]

        db.run(sql, params, (err, result) => {
            if(err) {
                console.error('Erreur SQL : ' + err)
                reject(false)
            } else { 
                resolve(true)
            }
        })
    })
}

/**
 * Modifie un candidat
 * @param {Object} model { lastname: String, firstname: String, slogan: String, id: Int }
 * @returns {Promise}
 */
exports.update = (model) => {
 return new Promise((resolve, reject) => {
        const sql = `UPDATE candidates SET lastname=?, firstname=?, slogan=? WHERE id=?`
        const params = [model.lastname, model.firstname, model.slogan, model.id]

        db.run(sql, params, (err, result) => {
            if(err) {
                console.error('Erreur SQL : ' + err)
                reject(false)
            } else { 
                resolve(true)
            }
        })
    })
}

/**
 * Supprime un candidat
 * @param {Int} id Identifiant du candidat à supprimer 
 * @returns {Promise}
 */
exports.delete = (id) => {
    return new Promise((resolve, reject) => {
        db.run('DELETE FROM candidates WHERE id=?', [id], (err, result) => {
            if(err) {
                reject(false)
            } else {
                resolve(true)
            }
        })
    })
}
