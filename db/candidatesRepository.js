const db = require('./index')

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
 * 
 * @param {Object} model ex = 
 * { 
 * lastname: "", 
 * firstname: "", 
 * slogan: "" 
 * }
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
                console.log(db.lastId)
                resolve(true)
            }
        })
    })
}

exports.update = (model) => {
 return new Promise((resolve, reject) => {
        
    })
}

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


/*
' OR 1=1; #
SELECT * FROM users WHERE username=? and password=?

SELECT * FROM users WHERE username='' OR 1=1; #' and password='$password'

*/
