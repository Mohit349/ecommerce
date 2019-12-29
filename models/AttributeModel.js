const mongoose = require('mongoose');

const Schema=mongoose.Schema;

const attributeSchema=new Schema({
_id:Schema.Types.ObjectId,
name:{type:String,required:true},
product_id:{type:Schema.Types.ObjectId,ref:'Product'}

});
module.exports=mongoose.model("Attribute",attributeSchema,"Attributes");