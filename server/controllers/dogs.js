var mongoose = require('mongoose');
var Dog = mongoose.model('Dog');
module.exports = {
  all: function(req, res) {
    Dog.find({}, function(err, dogs) {
      if(err) {
        console.log('something went wrong');
      } else { // else console.log that we did well and then redirect to the root route
        console.log(dogs);
        res.render('index', {dogs: dogs});
      }
    })
  },
  create: function(req, res) {
    var dog = new Dog({name: req.body.name, color: req.body.color});
    dog.save(function(err) {
     //if there is an error console.log that something went wrong!
      if(err) {
        console.log('something went wrong');
      } else { // else console.log that we did well and then redirect to the root route
        console.log('successfully added a dog!');
       res.redirect('/');
      }
    })
  },
  show: function(req, res) {
    Dog.findOne({_id: req.params.id}, function (err, dog){
        // loads a view called 'user.ejs' and passes the user object to the view!
        res.render('show', {dog: dog});
    })
  },
  edit: function(req, res) {
    Dog.findOne({_id: req.params.id}, function (err, dog){
        // loads a view called 'user.ejs' and passes the user object to the view!
        res.render('edit', {dog: dog});
    })
  },
  update: function(req, res) {
    Dog.update({_id: req.params.id}, {$set: {name: req.body.name, color: req.body.color}}, function (err, dog){

      if(err) {
        console.log('something went wrong on update');
      } else { // else console.log that we did well and then redirect to the root route
      console.log('successfully updated dog!');
      res.redirect('/');
      }
    })
  },
  destroy: function(req, res) {
    Dog.remove({_id: req.params.id}, function (err, dog){
    if(err) {
        console.log('something went wrong on delete');
      } else { // else console.log that we did well and then redirect to the root route
      console.log('successfully deleted dog!');
      res.redirect('/');
      }
    })
  }

}