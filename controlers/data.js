const data = require("../models/data");

const getData = async (req, res) => {
  const querys = {};
  const all = [
    "imdb_title_id",
    "title",
    // "original_title",
    "year",
    "date_published",
    "genre",
    "duration",
    "country",
    "language",
    "director",
    "writer",
    "production_company",
    "actors",
    "description",
    "avg_vote",
    "votes",
    "budget",
    "usa_gross_income",
    "worlwide_gross_income",
    "metascore",
    "reviews_from_users",
    "reviews_from_critics",
  ];

  all.forEach((e) => {
    if (req.query[e] !== undefined) {
      const par = req.query[e];
      var li = par.split(",").map((e) => e);
      querys[e] = { $regex: li.join("|"), $options: "i" };
    }
  });

  const myData = await data
    .find(querys)
    .limit(100)
    .select("-_id -original_title -__v"); //.sort('title');
  res.status(200).json(myData);
};

module.exports = { getData };
