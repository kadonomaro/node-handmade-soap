const express = require('express')
const { Router } = require('express')
const router = Router()
const handlebars = require('express-handlebars')
const { getIndexPage, getBlogPage, getGalleryPage, getFaqPage } = require('./controllers/pages.controller')

const PORT = process.env.PORT || 3000

const app = express()
const hbs = handlebars.create({
  defaultLayout: 'main',
  extname: 'hbs'
})

router
	.get('/', getIndexPage)
	.get('/blog', getBlogPage)
	.get('/gallery', getGalleryPage)
	.get('/faq', getFaqPage)

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'pages')
app.use(router)
app.use('/assets', express.static(__dirname + '/assets'))



function start() {
	app.listen(PORT, () => {
		console.log(`Server running on port: ${PORT}`);
		console.log(`http://localhost:${PORT}`);
	})
}

start()
