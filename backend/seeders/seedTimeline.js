const db = require('mongoose');
const faker = require('faker');
const Timeline = require('../models/Timeline');

db.connect('mongodb://localhost/nomadapp');

async function seedTimelines() {
  const newTimeline = new Timeline({
    userId: 0,
    dateStart: faker.date.past(),
    dateEnd: faker.date.future(),
    place: faker.address.city(),
    src: faker.image.imageUrl(),
  });
  await newTimeline.save();
}

seedTimelines();
