require("dotenv").config();
const app = require("express")();
const connectDb = require("./db/connect")

const port = process.env.PORT || 2000;

const data = require('./routes/data')

const cors = require("cors");
app.use(cors());


app.use("/api",data)

const start = async()=>{
    try {
        await connectDb(process.env.MONGODB_URL);
        app.listen(port,()=>{
            console.log(`Port connected on ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();