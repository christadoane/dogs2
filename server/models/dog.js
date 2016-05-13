// require mongoose
var mongoose = require('mongoose');
// create the schema
var DogSchema = new mongoose.Schema({
  name: String,
  color: String
})
// register the schema as a model
var Dog = mongoose.model('Dog', DogSchema);