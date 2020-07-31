const express = require('express')
const { Router } = require('express')
const router = Router()
const handlebars = require('express-handlebars')

const PORT = process.env.PORT || 3000

const app = express()
const hbs = handlebars.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

router.get('/', (request, response) => {
    response.render('index')
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'pages')
app.use(router)



function start() {
    app.listen(PORT, () => {
        console.log(`Server running on port: ${PORT}`);
        console.log(`http://localhost:${PORT}`);
    })
}

start()