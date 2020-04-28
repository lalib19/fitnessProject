const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const programSchema = new Schema({
	name: String,
	description: String,
	exercisesList: [{
		type: Schema.Types.ObjectId,
		ref: 'exercise'
	}],
	creator: String,
	likes: [{
		type: Schema.Types.ObjectId,
		ref: 'like'
	}]
});

const program = mongoose.model('program', programSchema);

module.exports = program;