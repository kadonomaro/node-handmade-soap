const { response } = require("express");

const getIndexPage = async (request, response) => {
	response.render('index', {
		title: 'Главная страница',
		scriptUrl: './assets/js/main.js'
	})
}

const getBlogPage = async (request, response) => {
	response.render('blog', {
		title: 'Творческая мастерская – мыло ручной работы на сайте Handmade soap',
		scriptUrl: './assets/js/blog.js'
	})
}


const getGalleryPage = async (request, response) => {
	response.render('gallery', {
		title: 'Галерея работ – мыло ручной работы на сайте Handmade soap',
		scriptUrl: './assets/js/gallery.js'
	})
}


module.exports = {
	getIndexPage,
	getBlogPage,
	getGalleryPage
}
