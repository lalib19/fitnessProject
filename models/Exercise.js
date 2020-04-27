const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
	name: String,
	description: String,
	level: {
		type: String,
		enum: [ 'Begginer', 'Intermediate', 'Advanced' ]
	},
	bodyPart: {
		type: String,
		enum: [ 'Upper body', 'Lower body', 'Full body' ]
	},
	category: {
		type: String,
		enum: [ 'men', 'women' ]
	},
	exerciseUrl: String
});

const exercise = mongoose.model('exercise', exerciseSchema);

module.exports = exercise;
