const Router =require('koa-rest-router')
const productControllers = require('../controllers/productController')
router = Router({
    prefix:'/api/v1'
})
router.resource('products', {
    // GET /products
    index: productControllers.getAll,
   
    // POST /products
    create: productControllers.addOne,
   
    // GET /products/:product
    show: productControllers.getOne,
   
   
   
    // PUT /products/:product
    update: productControllers.updateOne,
   
    // DELETE /products/:product
    remove: productControllers.deleteOne
  })
   
 module.exports = router;