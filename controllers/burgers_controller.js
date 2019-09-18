var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(burgerData) {
    var hbsObject = {
      burgers: burgerData
    };
    // console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/create", function(req, res) {
    //console.log('hereeee',req.body.name);
  burger.insertOne(req.body.burger_name, function(result) {
    // Send back the ID of the new quote
    // res.json({ id: result.insertId });
    console.log(result);
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  burger.update(req.params.id, function(result) {
    console.log(result);
    res.sendStatus(200);
  });
});


// Export routes for server.js to use.
module.exports = router;
