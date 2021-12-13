const Koa = require('koa');
var bodyParser = require('koa-bodyparser');

const app = new Koa();

const productRoutes = require('./api/routes/productRoutes')

app.use(bodyParser())
app.use(productRoutes.middleware());

app.listen(5000,()=>{
    console.log('Server running on port 5000')
});