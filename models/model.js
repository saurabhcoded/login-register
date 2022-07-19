const mongoose=require('mongoose');

const dataSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    date: {
        type: Date, 
        default: Date.now ,
    }
})

const data = mongoose.model('data', dataSchema);
module.exports=data;
