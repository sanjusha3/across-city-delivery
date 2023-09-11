const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    },
    phone: {
        type: Number,
        required: true,
        // validate(value) {
        //     if (value.length() != 10) {
        //         throw new Error('Phone Number is invalid!')
        //     }
        // }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
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
    address: {
        type: String,
        required: true
    }
})

module.exports = User