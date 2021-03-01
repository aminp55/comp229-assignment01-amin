let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

let businesscontactController = require('../controllers/businesscontact');

// helper function for guard purposes
function requireAuth(req, res, next)
{
  // check if user is logged in
  if(!req.isAuthenticated())
  {
    return res.redirect('/login');
  }
  next();
}

// get route for businesscontact list --> read opreation

router.get('/', businesscontactController.displayBusinessContactList);

// GET route for displaying ADD page --> CREATE opreation

router.get('/add', requireAuth, businesscontactController.displayAddPage);

// POST route for processing ADD page --> CREATE opreation

router.post('/add', requireAuth, businesscontactController.processAddPage);

// GET route for displaying EDIT page --> UPDATE opreation

router.get('/edit/:id', requireAuth, businesscontactController.displayEditPage);

// POST route for processing EDIT page --> UPDATE opreation

router.post('/edit/:id', requireAuth, businesscontactController.processEditPage);

// GET to perform business contact deletion --> DELETE opreation

router.get('/delete/:id', requireAuth, businesscontactController.performDelete);

module.exports = router;