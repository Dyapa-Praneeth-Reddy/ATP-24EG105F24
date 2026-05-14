import {Schema,Types,model} from 'mongoose';
//create cart Schema
const cartSchema = new Schema({
  product:{
    type:Types.ObjectId,
    ref:"product"  //name of the product model
  },
  count:{
    type:Number,
    default:1
  }
})

//Create User Schema
const userSchema = new Schema(
  
  {
  //structure of User resource
  username: 
  {
    type:String,
    required: [true,"Username is required"],
    minLength: [4,"Min Length of Username is 4 chars"],
    maxLength: [6,"Username size exceed 6 chars"]
  },
  password: 
  {
    type:String,
    required: [true, "Password required"]
  },
  email:
  {
    type:String,
    required:[true,"Email required"],
    unique:[true,"Email already existed"],
  },
  age:
  {
    type:Number
  },
  cart:[cartSchema],
},{
  versionKey:false,
  timestamps:true,
}
)
//Generate UserModel
//here user is collection
export const  userModel = model("user",userSchema)