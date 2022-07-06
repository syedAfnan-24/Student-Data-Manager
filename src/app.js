const express = require("express");
const path = require("path")
require("./db/conn")
const hbs = require("hbs")
const User = require("./models/userData")
const Student = require("./models/studMarks")
const { registerPartials } = require("hbs")



const app = express()
const port = process.env.PORT || 3000;
//setting the path- middle ware
const staticpath = path.join(__dirname,"../templates");
const templatepath = path.join(__dirname,"../templates/views");  
const partialpath = path.join(__dirname,"../templates/partials");

//middleware
app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")))
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")))
app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery/dist")))

app.use(express.urlencoded({extended:false}))
app.use(express.static(staticpath))
app.set("view engine","hbs")
app.set("views",templatepath)
hbs.registerPartials(partialpath)

app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/contactNMIT",(req,res)=>{
    res.render("contactNMIT")
})
app.get("/login",(req,res)=>{
    res.render("login")
})
app.post("/contact",async(req,res)=>{
    try{
        const query = new User(req.body);
        await query.save();
        res.status(201).render("index");
    }catch(error){
        res.status(500).send(error);
    }
})
app.post("/marks",async(req,res)=>{
    try{
        const query1 = new Student(req.body);
        await query1.save();
        res.status(201).render("marks");
    }catch(error){
        res.status(500).send(error);
    }
})
//login validation
app.post("/login",async(req,res)=>{
    try {
        const email = req.body.email;
        const password = req.body.password;
        
        const useremail= await User.findOne({email:email});
        if(useremail.password === password)
        { 
            res.status(201).render("marks")
        }else{
            res.send("Invalid Credentials")
        }
        
    } catch (error) {
        res.status(400).send("Invalid Credentials")
    }
})

//server create
app.listen(port,()=>{
    console.log(`server running at port number ${port}`);
})