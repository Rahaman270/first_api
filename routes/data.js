const express = require("express");
const router = express.Router();

const {getData} = require('../controlers/data')


router.route("/").get(getData);

module.exports = router;