const Faq = require('../models/faq.model')
const Article = require('../models/article.model')

const getIndex = async (request, response) => {
	response.render('index', {
		title: 'Мыло ручной работы на сайте Handmade soap',
		description: 'Мыло ручной работы, откройте для себя мир мыловарения. Как сделать мыло своими руками и другие секреты на сайте Handmade soap',
		scriptUrl: './assets/js/main.js',
		index: true
	})
}

const getBlog = async (request, response) => {
	const articles = await Article.find({})
	response.render('blog', {
		title: 'Творческая мастерская – мыло ручной работы на сайте Handmade soap',
		description: 'Мыло ручной работы, мыловарение. Как самому можно сделать мыло своими руками, пошаговая инструкция в нашей творческой мастерской на сайте Handmade soap',
		scriptUrl: './assets/js/blog.js',
		blog: true,
		articles
	})
}

const getGallery = async (request, response) => {
	response.render('gallery', {
		title: 'Галерея работ – мыло ручной работы на сайте Handmade soap',
		description: 'Мыло ручной работы, мыловарение. Фотогалерея мыла ручной работы на сайте Handmade soap',
		scriptUrl: './assets/js/gallery.js',
		gallery: true
	})
}

const getFaq = async (request, response) => {
	const faqItems = await Faq.find({})
	response.render('faq', {
		title: 'Часто задаваемые вопросы – мыло ручной работы на сайте Handmade soap',
		description: 'Ответы на все вопросы, которые могут возникнуть у начинающего мыловара. Часто задаваемые вопросы на сайте Handmade soap',
		scriptUrl: './assets/js/faq.js',
		faq: true,
		faqItems
	})
}


module.exports = {
	getIndex,
	getBlog,
	getGallery,
	getFaq
}
