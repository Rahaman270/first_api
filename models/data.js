const mongoose = require("mongoose");



// {
//   "imdb_title_id": "tt0000574",
//   "title": "The Story of the Kelly Gang",
//   "original_title": "The Story of the Kelly Gang",
//   "year": "1906",
//   "date_published": "1906-12-26",
//   "genre": "Biography, Crime, Drama",
//   "duration": "70",
//   "country": "Australia",
//   "language": "",
//   "director": "Charles Tait",
//   "writer": "Charles Tait",
//   "production_company": "J. and N. Tait",
//   "actors": "Elizabeth Tait, John Tait, Norman Campbell, Bella Cola, Will Coyne, Sam Crewes, Jack Ennis, John Forde, Vera Linden, Mr. Marshall, Mr. McKenzie, Frank Mills, Ollie Wilson",
//   "description": "True story of notorious Australian outlaw Ned Kelly (1855-80).",
//   "avg_vote": "6.1",
//   "votes": "537",
//   "budget": "$ 2250",
//   "usa_gross_income": "",
//   "worlwide_gross_income": "",
//   "metascore": "",
//   "reviews_from_users": "7.0",
//   "reviews_from_critics": "7.0"
// }

const schema = new mongoose.Schema(
  {
    "imdb_title_id": {
      "type": "String"
    },
    "title": {
      "type": "String"
    },
    "original_title": {
      "type": "String"
    },
    "year": {
      "type": "String"
    },
    "date_published": {
      "type": "String"
    },
    "genre": {
      "type": "String"
    },
    "duration": {
      "type": "String"
    },
    "country": {
      "type": "String"
    },
    "language": {
      "type": "String"
    },
    "director": {
      "type": "String"
    },
    "writer": {
      "type": "String"
    },
    "production_company": {
      "type": "String"
    },
    "actors": {
      "type": "String"
    },
    "description": {
      "type": "String"
    },
    "avg_vote": {
      "type": "String"
    },
    "votes": {
      "type": "String"
    },
    "budget": {
      "type": "String"
    },
    "usa_gross_income": {
      "type": "String"
    },
    "worlwide_gross_income": {
      "type": "String"
    },
    "metascore": {
      "type": "String"
    },
    "reviews_from_users": {
      "type": "String"
    },
    "reviews_from_critics": {
      "type": "String"
    }
  }
);

module.exports = mongoose.model('allmovdatanew',schema);