const router = require('express').Router()

// CUser details
router.get('/getUsers', async (req, res) => {
    try {

    } catch (err) {

    }
})

// Add new employee
router.post('/addNewEmployee', async (req, res) => {
    try {

    } catch (err) {

    }
})


// Get employees
router.get('/getEmployees', async (req, res) => {
    try {

    } catch (err) {

    }
})

// Get all current orders (status:undelivered)
router.get('/getCurrentOrders', async (req, res) => {
    try {

    } catch (err) {

    }
})

// Assign employee to an order and confirm
router.patch('/assignEmployeeAndConfirm/:id', async (req, res) => {
    try {
        // update packagedetail table using the id from params(packageid)
    } catch (err) {

    }
})

// // Accept order
// router.post('/acceptOrder', async (req, res) => {
//     try {

//     } catch (err) {

//     }
// })

// Delet Employee
router.delete('/deleteEmployee', async (req, res) => {
    try {

    } catch (err) {

    }
})

module.exports = router