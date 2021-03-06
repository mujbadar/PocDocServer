const express = require('express')
const router = express.Router()
const Visit = require('../models/visit.js')
const Patient = require('../models/patient.js')

//This route will get all Visit for logged in users.
router.get('/', (req, res) => {
  Visit.find({}, (error, visit) => {
    if (error) {
      res.status(400).json({error: error.message})
    }else {
      res.status(200).json(visit)
    }
  })
})

//Get route to visit other user profiles
router.get('/:id', (req, res) => {
  Visit.findOne({_id: req.params.id}, (error, foundVisit) => {
    if (error) {
      res.status(400).json({error: error.message})
    }else {
      console.log(foundVisit);
      res.status(200).json(foundVisit)
    }
  })
})

//Create Visit for logged in Patient.
router.post('/new', (req, res) => {
  Visit.create(req.body, (error, visit) => {
    if (error) {
      res.status(400).json({error: error.message})
    }else {
      res.status(200).json(visit)
    }
  })
})


//Edit visit
router.put('/:id', (req, res) => {
  Visit.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, visitEdit) => {
    if (error) {
      res.status(400).json({error: error.message})
    } else {
      res.status(200).json(visitEdit)
    }
  })
})

//Delete Visit
router.delete('/:id', (req, res) => {
  Visit.findByIdAndRemove(req.params.id, (error, visitDelete) => {
    if (error) {
      res.status(400).json({error: error.message})
    } else {
      console.log(visitDelete)
      res.status(200).json(visitDelete)
    }
  })
})

module.exports = router
