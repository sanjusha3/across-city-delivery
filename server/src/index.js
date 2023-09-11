const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Employee = require('./models/employee')


const app = express()
const port = process.argv[2] || 3000

app.use(express.json())

app.post('/signup', (req, res) => {
    const user = new User(req.body)

    user.save().then(() => {
        res.send(user)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.post('/create-employee', (req, res) => {
    const employee = new Employee(req.body)

    employee.save().then(() => {
        res.send(employee)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})