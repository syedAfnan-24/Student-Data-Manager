const mongoose = require("mongoose");

// creating a database
mongoose.connect("mongodb://0.0.0.0:27017/nmitMentor",{
    useNewUrlParser:true,
    useUnifiedTopology:true
},(err)=>{
    if(err)
    {
        console.log(err);
    }else{
        console.log("successfully connected");
    }
})