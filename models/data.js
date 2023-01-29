const mongoose = require("mongoose");


// Title:{
//     type:String,
//     required:true
// },

// Gross_Earnings:{
//     type:Number,
//     required:true
// }
const schema = new mongoose.Schema(
    {
        adult: {
          type: "String"
        },
        belongs_to_collection: {
          type: "String"
        },
        budget: {
          type: "Number"
        },
        genres: {
          type: "String"
        },
        homepage: {
          type: "String"
        },
        id: {
          type: "Number"
        },
        imdb_id: {
          type: "String"
        },
        original_language: {
          type: "String"
        },
        original_title: {
          type: "String"
        },
        overview: {
          type: "String"
        },
        popularity: {
          type: "Number"
        },
        poster_path: {
          type: "String"
        },
        production_companies: {
          type: "String"
        },
        production_countries: {
          type: "String"
        },
        release_date: {
          type: "Date"
        },
        revenue: {
          type: "Number"
        },
        runtime: {
          type: "Number"
        },
        spoken_languages: {
          type: "String"
        },
        status: {
          type: "String"
        },
        tagline: {
          type: "String"
        },
        title: {
          type: "String"
        },
        video: {
          type: "String"
        },
        vote_average: {
          type: "Number"
        },
        vote_count: {
          type: "Number"
        }
      }
);

module.exports = mongoose.model('allmovdata',schema);