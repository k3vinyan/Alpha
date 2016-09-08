import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Playlists = new Mongo.Collection('playlists');

Template.body.helpers({
  songs: function() {
    return Playlists.find()
  }
});
