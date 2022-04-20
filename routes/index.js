const express = require('express')
const router = express.Router()

const homeController = require('../controllers/homeController')
const apiController = require('../controllers/apiController')

/*
router.get('/', (request, response) => {
    response.send('Accueil')
})*/


/* HOME CONTROLLER */

router.get('/', homeController.index)

router.get('/about', homeController.about)

router.get('/hello/:name', homeController.sayHello)


/* API CONTROLLER */

router.get('/api', apiController.index)

router.post('/api', apiController.add)

router.get('/api/:id', apiController.getById) 

router.put('/api/:id', apiController.getById)

router.delete('/api/:id', apiController.remove)


/* ROUTES PAR DEFAUT & ERREURS */

// erreur 404 toujours en dernier
router.all('*', (req, res) => {
    res.status(404).send('Erreur 404 : page non trouvée')
})

module.exports = router