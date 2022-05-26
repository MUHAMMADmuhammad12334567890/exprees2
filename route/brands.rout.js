const { Router } = require("express");

const { getBrands } = require("../controllers/brands.controlers");

const router = Router();

router.get('/brands', getBrands.getBrands1)

router.post('/brands', getBrands.getBrands2)

router.delete('/brands', getBrands.getBrands3)


module.exports = router