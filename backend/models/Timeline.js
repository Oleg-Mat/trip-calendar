const db = require('mongoose');

const TimelineSchema = new db.Schema({
  dateStart: Date,
  dateEnd: Date,
  place: String,
  src: String,
});

module.exports = db.model('Timeline', TimelineSchema);
