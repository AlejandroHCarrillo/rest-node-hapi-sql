"use strict";

const events = require( "./events" );
const users = require( "./users" );

module.exports.register = async server => {
   await users.register( server );
   await events.register( server );
};