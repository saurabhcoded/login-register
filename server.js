const express=require('express');
const app=express();
const cors=require('cors');
const PORT=process.env.PORT || 5000;

//Middlewares
app.use(cors());
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
require('dotenv').config();
app.use(express.json());

//Routes
app.use("/",require("./routes/route"));


//Database
require("./models/conn")


//Listening to server
app.listen(PORT,()=>{
    console.log(`App is running on PORT ${PORT}`)
});