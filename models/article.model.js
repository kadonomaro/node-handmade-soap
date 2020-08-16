const { Schema, model } = require('mongoose')

const articleShema = new Schema({
	title: {
		type: String,
		required: true
	},
	subtitle: {
		type: String,
		required: true
	},
	text: {
		type: String,
		required: true
	},
	src: {
		type: String,
		required: true
	}
}, {
	collection: 'articles_collection',
	versionKey: true
})


module.exports = model('Article', articleShema)
