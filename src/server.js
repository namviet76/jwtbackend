import express from 'express'
import initWebRoutes from './routes/web'
import configViewEngine from './configs/viewEngine'
require('dotenv').config()

const PORT = process.env.PORT || 8080

const app = express()

//config viewEngine
configViewEngine(app)

initWebRoutes(app)

app.listen(PORT, () => {
    console.log('jwt Backend run on port ' + PORT)
})
