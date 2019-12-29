const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const productVariantSchema=new Schema({
_id:Schema.Types.ObjectId,
name:{type:String,required:true},
price:{type:Number,required:true},
discounted_price:{type:Number,required:true},
description:{type:String},
images:[String],
product_id:{type:Schema.Types.ObjectId,ref:'Product'},
option_ids:[{type:Schema.Types.ObjectId,ref:"Option"}]


});
const ProductVariant=mongoose.model("ProductVariant",productVariantSchema,"ProductVariants");
module.exports=ProductVariant;