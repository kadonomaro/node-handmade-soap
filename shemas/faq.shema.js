const { Schema, model } = require('mongoose')

const faqSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	}
}, {
	collection: 'faq_collection',
	versionKey: true
})


module.exports = model('Faq', faqSchema)
