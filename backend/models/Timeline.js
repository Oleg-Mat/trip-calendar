const db = require('mongoose');

const TimelineSchema = new db.Schema({
  userId: { type: db.Schema.Types.ObjectId, ref: 'User' },
  googleId: '',
  dateStart: Date,
  dateEnd: Date,
  place: String,
  src: { type: String, default: 'https://media.mnn.com/assets/images/2019/01/grumpy_cat.jpg.653x0_q80_crop-smart.jpg' },
  lat: { type: String, default: '' },
  lng: { type: String, default: '' },
});

module.exports = db.model('Timeline', TimelineSchema);
