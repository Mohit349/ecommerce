const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const productSchema=new Schema({
_id:Schema.Types.ObjectId,
name:{type:String,required:true},
price:{type:Number,required:true},
discounted_price:{type:Number,required:true},
description:{type:String},
images:[String]


});
module.exports=mongoose.model("Product",productSchema);