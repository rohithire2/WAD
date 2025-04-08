const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.json());
mongoose.connect("mongodb+srv://rohit:rohithire@cluster0.cxirw9y.mongodb.net/Student");

const StudentSchema=new mongoose.Schema({
    name:String,
    marks:Number
});
const Student=mongoose.model('Student',StudentSchema);

app.get('/',async(req,res)=>{
    res.send("welcome student");
    });

 app.get('/student',async(req,res)=>{
    const students=await Student.find();
        res.send(students);
    });

    app.get('/student/:name',async(req,res)=>{
        const{name}=req.params;
        const students=await Student.find({name});
            res.send(students);
        });

                                                                                                                     
app.listen(3000,(req,res)=>{
    console.log("server is running on port 3000");
});

