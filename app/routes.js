// External dependencies
const express = require('express');
const router = express.Router();

// nhs number
router.post('/nhsnumber', function (req, res) {

    // Make a variable and give it the value from 'know-nhs-number'
    var nhsNumber = req.session.data['nhs-number']
  
    // Check whether the variable matches a condition
    if (nhsNumber == "yes"){
      // Send user to next page
      res.redirect('nhs-number-what')
    }
    else {
      // Send user to ineligible page
      res.redirect('check-your-answers')
    }
  })

  // cert number
router.post('/exemption-number', function (req, res) {
    var nhsNumber = req.session.data['cert-number']
    if (nhsNumber == "yes"){
      res.redirect('exemption-number-what')
    }
    else {
      res.redirect('nhs-number')
    }
  })
module.exports = router;
