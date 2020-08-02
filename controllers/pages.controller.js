const { response } = require("express");

const getIndexPage = async (request, response) => {
	response.render('index', {
		title: 'Главная страница',
		scriptUrl: ''
	})
}

const getBlogPage = async (request, response) => {
	response.render('blog', {
		title: 'Творческая мастерская – мыло ручной работы на сайте Handmade soap',
		scriptUrl: ''
	})
}


module.exports = {
	getIndexPage,
	getBlogPage
}
