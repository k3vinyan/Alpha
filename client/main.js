import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

// import { Tasks } from '../imports/api/tasks.js';
import { Songs } from '../imports/api/songs.js';
import '../imports/ui/body.js';

//import './main.html';


Template.body.helpers({
  songs() {
    return Songs.find({}, { sort: {createdAt: -1 }})
  }
})
