import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'


// @decs Fetch all Products
// @route GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({})
   
    res.json(products)
})

// @decs Fetch single Product
// @route GET /api/products/:id
// @access Public
const getProductById = asyncHandler(async(req, res) => {
    const product = await Product.findById(req.params.id)

    if(product){
        res.json(product)
    } else {
        res.status(404)
        throw new Error('Product not fouund')
    }
})

// @decs Delete a Product
// @route DELETE /api/products/:id
// @access Private/Admin
const deleteProduct = asyncHandler(async(req, res) => {
    const product = await Product.findById(req.params.id)

    if(product){
       await product.remove()
       res.json({ message: 'Product removed' })
    } else {
        res.status(404)
        throw new Error('Product not fouund')
    }
})

// @decs Create a Product
// @route POST /api/products
// @access Private/Admin
const createProduct = asyncHandler(async(req, res) => {
    const product = new Product({
        name: 'sample name',
        price: 0,
        user: req.user._id,
        image: '/image/sample.jpg',
        brand: 'Sample brand',
        category: 'Sample category',
        countInStock: 0,
        numReviews: 0,
        description: 'Sample description'
    })

    const createdProduct = await product.save()
    res.status(201).json(createProduct)
})

// @decs Update a Product
// @route PUT /api/products/:id
// @access Private/Admin
const updateProduct = asyncHandler(async(req, res) => {
  const {name, price, description, image, brand, category, countInStock } = req.body

  const product = await Product.findById(req.params.id)

    if(product){
        product.name = name
        product.price = price
        product.description = description
        product.image = image
        product.brand = brand
        product.category = category
        product.countInStock = countInStock
   
        const updatedProduct = await product.save()
        res.json(updatedProduct)
    } else{
        res.status(404)
        throw new Error('Product not found')
    }  
})

export { getProducts, getProductById, deleteProduct, createProduct, updateProduct }