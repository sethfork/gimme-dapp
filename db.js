var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var devDapp = new Schema(
{
    //basic info
    "number": {type: Number, index: {unique: true}},
    "dappName": string,
    "devTeam": string,
    "shortDes": string,
    "donateAddr": string,
    "dappWebsite": string,
    "status": string,
    "releaseDate": date,
    //social media - if is null then no icon later
    "behance": string,
    "facebook": string,
    "flickr": string,
    "github": string,
    "googlePlus": string,
    "gravatar": string,
    "instagram": string,
    "linkedin": string,
    "picasa": string,
    "quora": string,
    "reddit": string,
    "rss": string,
    "skype": string,
    "stumbleupon": string,
    "tumbler": string,
    "twitter": string,
    "viemo": string,
    "vk": string,
    "wordpress": string,
    "xing": string,
    "yahoo": string,
    "youtube": string,


    //store social rating
    "upvoteCount": int,
    "downvoteCount": int
});
mongoose.model('devDapp', devDapp);
module.exports.Block = mongoose.model('devDapp');

mongoose.connect( 'mongodb://localhost/blockDB' );
mongoose.set('debug', true);
