const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const optionSchema=new Schema({
_id:Schema.Types.ObjectId,
name:{type:String,required:true},
attribute_id:{type:Schema.Types.ObjectId,ref:'Attribute'},
product_id:{type:Schema.Types.ObjectId,ref:'Product'}

});
module.exports=mongoose.model("Option",optionSchema,"Options");