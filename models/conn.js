const mongoose=require('mongoose');

mongoose.connect(process.env.DATABASE_URL,(err,result)=>{
    if(err){console.log("Database Error")}else{
        console.log("database connected succefully")
    }
})

