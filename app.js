require ('dotenv').config()
const express = require('express')
const app = express()
const {sequelize} = require('./db')
const { DefineUser } = require('./models/User');

;(async () => {
    try {
        await sequelize.authenticate();
        console.log('You did it')
    } catch (error) {
        console.log('Nope', error)
    }
    DefineUser(sequelize)

    sequelize.sync({force: true})
})()

const port = 3000

const auth = require('./controllers/Auth');


app.use("/", auth)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})