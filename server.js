const express = require('express')
const { Router } = require('express')
const router = Router()
const handlebars = require('express-handlebars')
const pagesController = require('./controllers/pages.controller')

const PORT = process.env.PORT || 3000

const app = express()
const hbs = handlebars.create({
  defaultLayout: 'main',
  extname: 'hbs'
})

router
	.get('/', pagesController.getIndex)
	.get('/blog', pagesController.getBlog)
	.get('/gallery', pagesController.getGallery)
	.get('/faq', pagesController.getFaq)

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'pages')
app.use(router)
app.use('/assets', express.static(__dirname + '/assets'))
app.use(function (req, res) {
	res.render('404', {
		title: 'Страница не найдена – Handmade soap'
	});
});



function start() {
	app.listen(PORT, () => {
		console.log(`Server running on port: ${PORT}`);
		console.log(`http://localhost:${PORT}`);
	})
}

start()

