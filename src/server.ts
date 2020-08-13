const express = require('express')
import { Request, Response } from 'express'
const mongoose = require('mongoose')
require('dotenv').config()
const { Router } = require('express')
const router = Router()
const handlebars = require('express-handlebars')
const pagesController = require('./controllers/pages.controller')

const PORT = process.env.PORT || 3000
const DB_URI = `mongodb+srv://admin:${process.env.DB_PASSWORD}@node.ujzh6.gcp.mongodb.net/handmade_soap`

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
app.use(express.static(__dirname + '/assets'))
app.use(function (req: Request, res: Response) {
	res.render('404', {
		title: 'Страница не найдена – Handmade soap'
	})
})



async function start() {
	try {
		await mongoose.connect(DB_URI, {
			useNewUrlParser: true,
			useFindAndModify: true,
			useUnifiedTopology: true
		})
		app.listen(PORT, () => {
			console.log(`Server running on port: ${PORT}`)
			console.log(`http://localhost:${PORT}`)
		})
	} catch (error) {
		console.warn(error)
	}

}

start()

