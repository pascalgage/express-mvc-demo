// importer le module express
const express = require('express');

// application express
const app = express();

// middleware : s'exécute à chaque requête
app.use((req, res, next) => {
    let method = req.method;
    let path = req.originalUrl;
    console.log(`${method} ${path}`);
    next()
})

// gestion des fichiers statiques
app.use('/public', express.static(__dirname + '/public'))

// import des routes (voir le fichier routes/index.js)
const router = require('./routes')
// association du router à l'app
app.use('/', router)

// démarrage du serveur
app.listen(80, () => {
    console.log("Serveur prêt (http://localhost)")
});
