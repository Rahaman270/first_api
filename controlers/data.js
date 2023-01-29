const data = require("../models/data")

const getData = async (req,res) =>{

const {title,overview,tagline} = req.query
const querys = {};

if (title){
    querys.title = {$regex:title,$options:"i"};
}

if (overview){
    var li = overview.split(',').map((e)=>e);
    querys.overview = {$regex:li.join('|'),$options:"i"};
}

if (tagline){
    var li = tagline.split(',').map((e)=>e);
    querys.tagline = {$regex:li.join('|'),$options:"i"};
}

    const myData = await data.find(querys).limit(100).select('-_id -poster_path -__v');//.sort('title');
    res.status(200).json(myData);
}


module.exports = {getData}