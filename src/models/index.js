const { Sequelize, DataTypes } = require('sequelize')


const sequelize = new Sequelize(`postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@db:5432/myadmin`, { dialect: "postgres" })

sequelize.authenticate().then(() => {
    console.log(`Database connected to discover`)
}).catch((err) => {
    console.log(22, err)
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

//connecting to model
db.users = require('./user')(sequelize, DataTypes)

//exporting the module
module.exports = db