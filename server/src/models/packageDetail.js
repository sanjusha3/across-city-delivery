const mongoose = require('mongoose')
const validator = require('validator')

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

module.exports = PackageDetail