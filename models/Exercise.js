const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
	name: String,
	description: String,
	level: {
		type: String,
		enum: [ 'Beginner', 'Intermediate', 'Advanced' ]
	},
	bodyPart: {
		type: String,
		enum: [ 'Upper body', 'Lower body', 'Full body' ]
	},
	exerciseUrl: String,
	numberOfSets: Number,
	numberOfReps: Number
});

const exercise = mongoose.model('exercise', exerciseSchema);

module.exports = exercise;
