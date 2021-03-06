"use strict";

/**
 * @desc definition DB schemata & connection to mongoDB
 */

var mongoose = require('mongoose');
// Mongoose-Modelle laden
var models = require('./models.js')(mongoose);


// Mongoose Verbindung einrichten
mongoose.connect('mongodb://localhost/fireDBAlice');

// Mongoose und Modelle exportieren, damit Hauptprogramm diese verwenden kann.
exports.mongoose = mongoose;
exports.models = models;