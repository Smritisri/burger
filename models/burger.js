// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(name, cb) {
    orm.insertOne("burgers", 
    ["burger_name", "devoured"], 
    [name, false], cb);
  },
  updateOne: function(id, cb) {
    var condition = "id=" + id
    orm.updateOne("burgers", 
    {devoured:true}, 
    condition, cb);
  }
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;
