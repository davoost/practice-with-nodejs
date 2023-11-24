const Product = require('../models/product')

const getAllProductsStatic = async (req, res) => {
    const search = 'ab'
    const products = await Product.find({}).sort('name')
    res.status(200).json({ products, nbHits: products.length })
}

const getAllProducts = async (req, res) => {
    const { featured, name, company, sort, price, rating,  } = req.query
    const queryObject = {}
    if (featured){
        queryObject.featured = featured === 'true' ? true : false
    }
    if (company){
        queryObject.company = company
    }
    if (name){
        queryObject.name = {$regex:name, $options: 'i'}
    }
    console.log(queryObject)
    let result = Product.find(queryObject);
    if(sort){
        products = products.sort()
    }
    const products = await result
    res.status(200).json({ products, nbHits: products.length })
}

module.exports = {
    getAllProductsStatic,
    getAllProducts
    
}