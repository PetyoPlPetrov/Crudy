const Pool = require('pg').Pool

const pool = new Pool({
    user: process.env.DB_USER,
    host: 'db',
    database: 'myadmin',
    password: process.env.DB_PASSWORD,
    port: 5432,
})
const express = require('express'),
    app = express();
const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser')

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cookieParser())
const userRoutes = require('./src/routes/user');
const db = require('./src/models')


app.use('/api/users', userRoutes);

setTimeout(() => {
    db.sequelize.sync({ force: true }).then(() => {
        console.log("db has been re sync")
    });
}, 15000)

const getUsers = (request, response) => {

    pool.query('SELECT * FROM users;', (error, results) => {
        console.log({ results })
        if (error) {
            response.status(200).json(error);
            return

        }
        response.status(200).json(results.rows)
    })
}
app.get('/',
    (req, res) => res.send('Dockerizing Node Application!'));

app.get('/users', getUsers);

app.listen(3002,
    () => console.log(`[bootup]: Server is running at port: 3002`));
