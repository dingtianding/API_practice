var express = require('express');
var router = express.Router();
const fetch = require("node-fetch")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/get_stuff"),(req, res) => {
  console.log("/get_stuff endpoint called");
  res.json({
    "message" : "here is the response"
  })
}

router.get("/fetch", async (req, res) => {
  console.log("/fetch called")
  const url ="";
  const option = {
    "method": GET,
  }
  const response = await fetch(url, options)
    .then(res => res.json)
    .catch(e => {
      console.error({
        "message": "oh noes!",
        error: e,
      })
    })
  console.log("response: ", response);
  res.json(response);
});

module.exports = router;
