/* Add all the required libraries*/
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config'),
    uri = config.db.uri;
/* Connect to your database using mongoose - remember to keep your key secret*/
mongoose.connect(uri, {useNewUrlParser: true});
/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
   var temp = Listing.find({Code: 'LBW'});
   console.log(temp.toString());

};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
   var temp = Listing.find({Code: 'CABL'});
   console.log(temp.toString());
   Listing.deleteOne({ Code: 'CABL' }, function (err) {});
};
var updatePhelpsMemorial = function() {
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
   Listing.findOneAndUpdate({Code: 'PHL'}, {address: '701 North Broadway, Sleepy Hollow 10591, New York, United States'});
   var temp = Listing.find({Code: 'PHL'});
   console.log(temp.toString());
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
   var temp = Listing.find({});
   console.log(temp.toString());
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();