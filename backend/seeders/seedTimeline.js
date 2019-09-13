const db = require('mongoose');
const faker = require('faker');
const Timeline = require('../models/Timeline');

db.connect('mongodb+srv://root:z1qx2wc3e@cluster0-ser1y.mongodb.net/nomadapp?retryWrites=true&w=majority', { useNewUrlParser: true });

async function seedTimelines() {
  const newTimeline = new Timeline({
    // userId: '5d7b343485231f0594161e1f',
    // dateStart: faker.date.past(),
    // dateEnd: faker.date.future(),
    // place: 'London',
    // src: faker.image.imageUrl(),
    // lat: 51.509865,
    // lng: -0.118092,
    userId: '5d7b343485231f0594161e1f',
    dateStart: faker.date.past(),
    dateEnd: faker.date.future(),
    place: 'Dublin',
    src: faker.image.imageUrl(),
    lat: 53.350140,
    lng: -6.266155,
  });
  await newTimeline.save();
}

seedTimelines();
