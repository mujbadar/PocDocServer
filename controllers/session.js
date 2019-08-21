const express = require('express')
const router = express.Router()
const Patient = require('../models/patient.js')
const Doctor = require('../models/doctor.js')
const bcrypt = require('bcrypt')

//Authenticating User login
router.post('/', (req, res) => {
  Patient.findOne({ userName: req.body.userName }, (error, foundUsers) => {
    if (foundUsers) {
      if (bcrypt.compareSync(req.body.password, foundUsers.password)) {
        console.log(foundUsers)
        res.status(200).json(foundUsers)
      } else if (error) {
        console.log('Not able to sign in');
        res.json({error: error.message})
      } else {
        console.log('300 error');
        res.status(300).json('error')
      }
    } else {
      Doctor.findOne({ userName: req.body.userName }, (error, foundUsers) => {
        if (foundUsers) {
          if (bcrypt.compareSync(req.body.password, foundUsers.password)) {
            console.log(foundUsers)
            res.status(200).json(foundUsers)
          } else if (error) {
            console.log('Not able to sign in');
            res.json({error: error.message})
          } else {
            console.log('300 error');
            res.status(300).json('error')
          }
    }
  })
}
})
})

module.exports = router
