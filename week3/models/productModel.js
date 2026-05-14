import {Schema,model} from 'mongoose'

const productSchema = new Schema({
  productId:{
    type:Number,
    required:[true,"Product id required"],
    unique:[true,"product already exists"]
  },
  productName:{
    type:String,
    required:[true,"product name is required "]
  },
  price:{
    type:Number,
    required:[true,"price is required"],
    min:[10000,"product price atleast 10000"],
    max:[50000,"product price should not exceed 50000"],
  },
  brand:{
    type:String,
    required:[true,"brand is required"]
  }
},{
  versionKey:false,
  timestamps:true
});

export const productModel = model("product",productSchema)



























// Create Product REST API with below features
// 1. Product document structure
//         a.productId (required)
//         b.productName(required)
//         c.price(required, min price 10000 and max price 50000)
//         d.brand(required)
// 2. REST API with below operations
//         a. Create product
//         b. Read all products
//         c. Read a product by productId
//         d. Update a product by productId
//          e. Delete a product by productId