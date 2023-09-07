const mongoose = require('mongoose')
const moment = require('moment')
const validator = require('validator')


mongoose.connect('mongodb://127.0.0.1:27017/acd-db', {
    useNewUrlParser: true,
})


const Admin = mongoose.model('Admin', {
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid!')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        validate(value) {
            if (value.tolowercase().includes('password')) {
                throw new Error(`Password shouldn't contain the term 'password'`)
            }
        }
    }
})

const Employee = mongoose.model('Employee', {
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid!')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        validate(value) {
            if (value.tolowercase().includes('password')) {
                throw new Error(`Password shouldn't contain the term 'password'`)
            }
        }
    },
    isAvailable: {
        type: Boolean,
        required: true
    }
})

const PackageDetail = mongoose.model('PackageDetail', {
    desc: {
        type: String
    },
    weight: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    isFragile: {
        type: Boolean,
        required: true
    },
})

const PackageStatus = mongoose.model('PackageStatus', {
    orderedAt: {
        type: Date,
        required: true,
        default: moment.now()
    },
    isDelivered: {
        type: Boolean,
        default: false
    },
    deliveredAt: {
        type: Date,
        required: true
    }
})

// const San = new User({
//     name: "San",
//     phone: 831,
//     email: "s@g",
//     password: 123,
//     address: "8"
// })

San.save().then(() => {
    console.log(San)
}).catch((error) => {
    console.log('Error!', error)
})