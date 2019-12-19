const router = require('express').Router();

const controller = require('../controllers/controller');

router.get('/', controller.home);

router.get('/continuada', controller.continuada);

router.post('/checado', controller.checado);

module.exports = router;