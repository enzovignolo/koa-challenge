const products = require('../../db/mockData.json')
exports.getAll = (ctx,next)=>{
    ctx.status = 200;
    ctx.body=products;
    return
}

exports.addOne = (ctx,next)=>{
    products.push(ctx.request.body);
    ctx.status = 201;
    ctx.body = products;
}

exports.getOne = (ctx,next)=>{
    console.log(ctx.params.product);
    const product = products.find((product)=>product.id == ctx.params.product);
    if(product){
        console.log(product)
        ctx.status=200;
        ctx.body=product
    }else{
        ctx.status=404;
        ctx.body={status:'Product not found'}
    }
}

exports.updateOne = (ctx,next)=>{
    const idx = products.findIndex((product)=>product.id == ctx.params.product);
   
    if(idx<0){
        ctx.status=404;
        ctx.body={status:'Product not found'}
    }else{
        products[idx]= {
            id:products[idx].id,
            product : ctx.request.body.product || products[idx].product,
            stock : ctx.request.body.stock || products[idx].stock,
            thumbnail : ctx.request.body.thumbnail || products[idx].thumbnail,
        }
        ctx.body=products[idx]
    }
}

exports.deleteOne =(ctx,next)=>{
    const idx = products.findIndex((product)=>product.id == ctx.params.product);
   
    if(idx<0){
        ctx.status=404;
        ctx.body={status:'Product not found'}
    }else{
        products.splice(idx,1);
        ctx.status=203;
        ctx.body={status:"Product deleted"}     


    }
}