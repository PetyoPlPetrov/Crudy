const Pool = require('pg').Pool

const pool = new Pool({
    user: process.env.DB_USER,
    host: 'db',
    database: 'myadmin',
    password: process.env.DB_PASSWORD,
    port: 5432,
});

const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cookieParser())


const authRoutes = require('./src/routes/auth');
const db = require('./src/models')
const { getUsers } = require('./src/routes/user')


app.use('/api/users', authRoutes);

//TODO implement depends_on in docker compose
db.sequelize.sync({ force: true }).then(() => {
    console.log("db has been re sync")
});


app.get('/users', getUsers(pool));
app.get('/ok', (req, response) => {
    response.status(200).json('`okkk');
})

app.listen(3002,
    () => console.log(`[bootup]: Server is running at port: 3002`));
