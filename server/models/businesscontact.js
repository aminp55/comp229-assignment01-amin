let mongoose = require('mongoose');

// create model class

let businesscontactModel = mongoose.Schema ({
    name: String,
    number: String,
    email: String,
},
{
    collection: "businesscontact"
})
module.exports = mongoose.model('businesscontact', businesscontactModel);