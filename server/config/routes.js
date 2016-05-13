
var dogs = require('../controllers/dogs.js');

// Routes
// Root Request
module.exports = function(app) {
  //app.get('/', function(req, res) {
   // res.render('index')
  //})
  app.get('/', function (req, res) {
    dogs.all(req, res)
  })
  app.get('/dogs/new', function(req, res) {
    res.render('new')
  })
  app.post('/dogs', function(req,res){
    dogs.create(req, res)
  })
  app.get('/dogs/:id', function(req, res) {
    dogs.show(req, res)
  })
  app.get('/dogs/:id/edit', function(req, res) {
    dogs.edit(req,res)
  })
  app.post('/dogs/:id', function(req, res) {
    dogs.update(req, res)
  })
  app.post('/dogs/:id/destroy', function(req, res) {
    dogs.destroy(req, res)
  })
};



