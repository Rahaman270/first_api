require("dotenv").config();
const app = require("express")();
const connectDb = require("./db/connect")
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const PORT = process.env.PORT || 2000;

const data = require('./routes/data')



app.get("/",(req,res)=>{
    res.send('Server Running...')
});

app.use("/api",data)

const start = async()=>{
    try {
        await connectDb(process.env.MONGODB_URL);
        app.listen(PORT,()=>{
            console.log(`Port connected on ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();