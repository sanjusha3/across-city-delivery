const mongoose = require('mongoose')
const validator = require('validator')

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
            if (value.toLowerCase().includes('password')) {
                throw new Error(`Password shouldn't contain the term 'password'`)
            }
        }
    },
    isAvailable: {
        type: Boolean,
        required: true
    }
})

module.exports = Employee