const mongoose =require("mongoose")
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017/olympics", {
    useNewUrlParser:true,
    useUnifiedTopology:true

}).then(()=>
{
    console.log("Connection Sucessful");

}).catch((e)=>
{
    console.log("No Connection");
    console.log(e)
})
