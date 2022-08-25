import express from 'express'
import { engine } from 'express-handlebars'
import mysql from 'mysql2/promise'

const app = express()
const port = process.env.PORT || 3000

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

mysql.createConnection({
  host: 'pauliuspetrunin.lt',
  user: 'bit',
  password: 'kulokas',
  database: 'WilbertasC',
})

app.get('/', async (req, res) => {
  const songs = await database.query('SELECT id, track, album FROM songs')
  res.render('index', { songs: songs[0] })
})

app.listen(port)
