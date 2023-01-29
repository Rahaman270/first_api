require('dotenv').config();

const connectDb = require('./db/connect');

const data = require('./models/data');

const allData = require('./csvjson.json');

const start = async()=>{
    try {
        await connectDb(process.env.MONGODB_URL);
        await data.create(allData);
        console.log('success');
    } catch (error) {
        console.log(error);
    }
};

start();