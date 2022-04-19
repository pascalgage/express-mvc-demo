const express = require('express')
const router = express.Router()

const homeController = require('../controllers/homeController')

/*
router.get('/', (request, response) => {
    response.send('Accueil')
})*/

router.get('/', homeController.index)

router.get('/about', homeController.about)

router.get('/hello/:name', homeController.sayHello)

router.all('*', (req, res) => {
    res.status(404).send('Erreur 404 : page non trouvée')
})

module.exports = router