import  mongoose  from 'mongoose'

const reviewScema = mongoose.Schema(
    {
        name: { type: String, required: true },
        rating: { type: Number, required: true },
        comment: { type: String, required: true },
    },
    {
        timestamps: true,
    }
)

const productSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        name: {
            type: String,
            required: true
        },
        image: {
            type: String
        },
        brand: {
            type: String
        },
        category: {
            type: String
        },
        description: {
            type: String
        },
        reviews: [reviewScema],
        rating: {
            type: Number,
            required: true,
            default: 0
        },
        numReviews: {
            type: Number,
            default: 0
        },
        price: {
            type: Number,
            default: 0
        },
        countInStock: {
            type: Number,
            default: 0
        },
    }, 
    {
        timestamps: true,
    }
)

const Product = mongoose.model('Product', productSchema)

export default Product