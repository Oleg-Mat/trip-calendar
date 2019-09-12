const mongoose = require('mongoose');
const User = require('./models/users');
const Timeline = require('./models/users');
var faker = require('faker');
mongoose.connect('mongodb://localhost/users', {
  useNewUrlParser: true,
});


mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

async function seed(index) {
  const newCategory = new Category({
   
  });
  await newCategory.save();
}

seed();