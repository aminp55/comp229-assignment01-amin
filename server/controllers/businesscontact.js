let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to businesscontact model
let BusinessContact = require('../models/businesscontact');

module.exports.displayBusinessContactList = (req, res, next) => {
  BusinessContact.find((err, businesscontactList) => {

    if (err)

    {
        
      return console.error(err);

    } else {

      //console.log(businesscontactList);
      res.render('businesscontact/list', 
      {title : 'Business Contact List', 
      businesscontactList : businesscontactList, 
      displayName: req.user ? req.user.displayName : ''})

    }

  });

}

module.exports.displayAddPage = (req, res, next) => {
  res.render('businesscontact/add', 
  {title: 'Add Business Contact', 
  displayName: req.user ? req.user.displayName : ''})
}

module.exports.processAddPage = (req, res, next) => {
  let newBusinessContact = BusinessContact({
    "name": req.body.name,
    "number": req.body.number,
    "email": req.body.email
  });

  BusinessContact.create(newBusinessContact, (err, BusinessContact) => {
    if(err)
    {
      console.log(err);
      res.end(err);
    }
    else
    {
      // refresh the business contact list
      res.redirect('/businesscontact-list');
    }
  });

}

module.exports.displayEditPage = (req, res, next) => {
  let id = req.params.id;

  BusinessContact.findById(id, (err, businesscontactToEdit) => {
    if(err)
    {
      console.log(err);
      res.end(err);
    } 
    else
    {
      //show the edit view      
      res.render('businesscontact/edit', 
      {title: 'Edit Business Contact', 
      businesscontact: businesscontactToEdit,
      displayName: req.user ? req.user.displayName : ''})
    
    }
  });
}

module.exports.processEditPage = (req, res, next) => {
  let id = req.params.id
  
  let updatedBusinessContact = BusinessContact({
    "_id": id,
    "name": req.body.name,
    "number": req.body.number,
    "email": req.body.email
  });

  BusinessContact.updateOne({_id: id}, updatedBusinessContact, (err) => {
    if(err)
    {
      console.log(err);
      res.end(err);
    }
    else
    {
      // refresh business contact list
      res.redirect('/businesscontact-list');
    }
  });
}

module.exports.performDelete = (req, res, next) => {
  let id = req.params.id;

  BusinessContact.remove({_id: id}, (err) => {
      if(err)
      {
          console.log(err);
          res.end(err);
      }
      else
      {
           // refresh the Client list
           res.redirect('/businesscontact-list');
      }
  });
}