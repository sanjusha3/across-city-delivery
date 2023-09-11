const mongoose = require('mongoose')
const moment = require('moment')
const validator = require('validator')


mongoose.connect('mongodb://127.0.0.1:27017/acd-db', {
    useNewUrlParser: true,
})









// const San = new User({
//     name: "San",
//     phone: 831,
//     email: "s@g",
//     password: 123,
//     address: "8"
// })

// San.save().then(() => {
//     console.log(San)
// }).catch((error) => {
//     console.log('Error!', error)
// })