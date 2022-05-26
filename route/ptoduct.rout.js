const {Router} = require('express')

const {getProduct} = require('../controllers/producs.controlers')

const router = Router()

router.get('/products', getProduct.getProduct1)

router.get('/products', getProduct.getProduct2)

router.post('/product', getProduct.getProduct3)

router.delete('/product', getProduct.getProduct4)


module.exports = router