const mongoose = require('mongoose');
const faker = require('faker');
const User = require('./models/User');
const Timeline = require('./models/User');


async function seedUsers() {
  const newUser = new User({
    avatar: faker.image.imageUrl(),
    name: faker.random.name(),
    company: faker.random.companyName(),
    email: faker.internet.email(),
    website: faker.internet.url(),
    userId: faker.random.uuid(),
  }, {
    avatar: faker.image.imageUrl(),
    name: faker.random.name(),
    company: faker.random.companyName(),
    email: faker.internet.email(),
    website: faker.internet.url(),
    userId: faker.random.uuid(),
  }, {
    avatar: faker.image.imageUrl(),
    name: faker.random.name(),
    company: faker.random.companyName(),
    email: faker.internet.email(),
    website: faker.internet.url(),
    userId: faker.random.uuid(),
  }, {
    avatar: faker.image.imageUrl(),
    name: faker.random.name(),
    company: faker.random.companyName(),
    email: faker.internet.email(),
    website: faker.internet.url(),
    userId: faker.random.uuid(),
  }, {
    avatar: faker.image.imageUrl(),
    name: faker.random.name(),
    company: faker.random.companyName(),
    email: faker.internet.email(),
    website: faker.internet.url(),
    userId: faker.random.uuid(),
  }, {
    avatar: faker.image.imageUrl(),
    name: faker.random.name(),
    company: faker.random.companyName(),
    email: faker.internet.email(),
    website: faker.internet.url(),
    userId: faker.random.uuid(),
  }, {
    avatar: faker.image.imageUrl(),
    name: faker.random.name(),
    company: faker.random.companyName(),
    email: faker.internet.email(),
    website: faker.internet.url(),
    userId: faker.random.uuid(),
  }, {
    avatar: faker.image.imageUrl(),
    name: faker.random.name(),
    company: faker.random.companyName(),
    email: faker.internet.email(),
    website: faker.internet.url(),
    userId: faker.random.uuid(),
  }, {
    avatar: faker.image.imageUrl(),
    name: faker.random.name(),
    company: faker.random.companyName(),
    email: faker.internet.email(),
    website: faker.internet.url(),
    userId: faker.random.uuid(),
  }, {
    avatar: faker.image.imageUrl(),
    name: faker.random.name(),
    company: faker.random.companyName(),
    email: faker.internet.email(),
    website: faker.internet.url(),
    userId: faker.random.uuid(),
  });
  await newUser.save();
}
async function seedTimelines() {
  const newTimeline = new Timeline({
    userId: String,
    dateStart: faker.date.past(),
    dateEnd: faker.date.future(),
    place: faker.address.city(),
    src: faker.image.imageUrl(),
  }, {
    userId: String,
    dateStart: faker.date.past(),
    dateEnd: faker.date.future(),
    place: faker.address.city(),
    src: faker.image.imageUrl(),
  }, {
    userId: String,
    dateStart: faker.date.past(),
    dateEnd: faker.date.future(),
    place: faker.address.city(),
    src: faker.image.imageUrl(),
  });
}

seedUsers();
// seedTimelines();
