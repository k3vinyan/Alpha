import { Template } from 'meteor/templating';
import { Songs } from '../api/songs.js'

import './body.html';

Template.body.events({
  'submit .new-task' (event) {
    event.preventDefault();

    const target = event.target;
    const title = target.title.value;

    Songs.insert({
      title,
      createdAt: new Date(), //current time
    });

    target.title.value = ''; //clear form
  }
});


Template.body.helpers({
  songs() {
    return Songs.find({}, { sort: {createdAt: -1 }})
  }
});
