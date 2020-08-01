const { response } = require("express");

const getIndexPage = async (request, response) => {
	response.render('index')
}

const getBlogPage = async (request, response) => {
	response.render('blog')
}


module.exports = {
	getIndexPage,
	getBlogPage
}
