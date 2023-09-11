const mongoose = require('mongoose')
const validator = require('validator')

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

module.exports = PackageStatus