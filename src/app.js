const express =require("express")
var cors = require('cors');


require("../src/db/conn")
const MensRanking =require("../src/models/mens")
const app=express();

const port = process.env.PORT || 3000;
app.use(express.json())
app.use(cors({origin: 'http://localhost:4200'}));

app.get("/", async(req,res)=>
{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed

    res.send('cors problem fixed:)');
    res.send("Hello i am getting");
})

app.post("/mens", async(req,res)=>{
    try{
        
        const addingMenRecords= new MensRanking(req.body)
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
        res.setHeader('Access-Control-Allow-Credentials', true); // If needed
    
        console.log(req.body)
       const insertMens=await addingMenRecords.save();
       res.status(201).send(insertMens)
    }
    catch(e)
    {
        res.status(400).send(e)
    }
})

app.get("/mens", async(req,res)=>{
    try{
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
        res.setHeader('Access-Control-Allow-Credentials', true); // If needed
    
       const getMens=await MensRanking.find({}).sort({"ranking":1});
       res.status(200).send(getMens)

    }
    catch(e)
    {
        res.status(400).send(e)
    }
})

app.get("/mens/:id", async(req,res)=>{
    try{
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
        res.setHeader('Access-Control-Allow-Credentials', true); // If needed
    
       const _id=req.params.id
       const getMen=await MensRanking.findById({_id});
       res.status(200).send(getMen)
       
    }
    catch(e)
    {
        res.status(400).send(e)
    }
})


app.patch("/mens/:id", async(req,res)=>{
    try{
        // req.setHeader('Access-Control-Allow-Origin', '*');
        // req.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
        // req.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
        // req.setHeader('Access-Control-Allow-Credentials', true); // If needed
    
       const _id=req.params.id
       const updateMen=await MensRanking.findByIdAndUpdate(_id, req.body,{
        new:true
       });
       res.status(201).send(updateMen)
       
    }
    catch(e)
    {
        console.log(e)
        res.status(500).send(e)
    }
})

app.delete("/mens/:id", async(req,res)=>{
    try{
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
        res.setHeader('Access-Control-Allow-Credentials', true); // If needed
    
       const _id=req.params.id
       const deleteMen=await MensRanking.findByIdAndDelete(_id);
       res.status.send(deleteMen)
       
    }
    catch(e)
    {
        res.status(500).send(e)
    }
})


app.listen(port , () =>{
    console.log(`Connection is live at Port No. ${port}`)
})


