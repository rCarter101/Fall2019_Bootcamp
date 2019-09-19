/* Add all the required libraries*/
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config'),
    uri = config.db.uri;
/* Connect to your database using mongoose - remember to keep your key secret*/
mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true});
/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
   var temp = Listing.findOne({ code: 'LBW' }, function(err, stuff){
    console.log(stuff);
   });
   

};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
   var temp = Listing.find({code: 'CABL'}, function(err, stuff){
        if (err) throw err;
       console.log(stuff);
   }).then(() => Listing.deleteOne({ code: 'CABL' }, function (err) {}));

};
var updatePhelpsMemorial = function() {
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
   Listing.findOneAndUpdate({code: 'PHL'}, {address: '701 North Broadway, Sleepy Hollow 10591, New York, United States'});
   var temp = Listing.find({code: 'PHL'}, function(err, stuff){
    if (err) throw err;
       console.log(stuff);
   });
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
   var temp = Listing.find(function(err, stuff){
    if (err) throw err;
    console.log(stuff);
   });
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();