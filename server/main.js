import { Meteor } from 'meteor/meteor';
// import '../imports/api/tasks.js';
import '../imports/api/songs.js';

Meteor.startup(() => {
  // code to run on server at startup
  Resolutions = new Mongo.Collection('resolutions');

});
