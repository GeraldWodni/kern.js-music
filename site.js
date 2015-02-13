// kern.js-music main include file, needs kern.js, see https://github.com/GeraldWodni/kern.js
// (c)copyright 2015 by Gerald Wodni <gerald.wodni@gmail.com>

var _       = require("underscore");
var async   = require("async");

module.exports = {
    setup: function( k ) {
        
        k.router.get("/", function( req, res ) {
            k.renderJade( req, res, "home" );
        });

    }
};
