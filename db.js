var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var devDapp = new Schema(
{
    //basic info
    "number": {type: Number, index: {unique: true}},
    "dappName": String,
    "devTeam": String,
    "shortDes": String,
    "donateAddr": String,
    "dappWebsite": String,
    "status": String,
    "releaseDate": String,
    //social media - if is null then no icon later
    "behance": String,
    "facebook": String,
    "flickr": String,
    "github": String,
    "googlePlus": String,
    "gravatar": String,
    "instagram": String,
    "linkedin": String,
    "picasa": String,
    "quora": String,
    "reddit": String,
    "rss": String,
    "skype": String,
    "stumbleupon": String,
    "tumbler": String,
    "twitter": String,
    "viemo": String,
    "vk": String,
    "wordpress": String,
    "xing": String,
    "yahoo": String,
    "youtube": String,
    //store social rating
    "upvoteCount": Number,
    "downvoteCount": Number
});
mongoose.model('devDapp', devDapp);
module.exports.Block = mongoose.model('devDapp');

mongoose.connect( 'mongodb://localhost/blockDB' );
mongoose.set('debug', true);
