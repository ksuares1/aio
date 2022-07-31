const mongoose = require('mongoose');
const { schema: messageSchema, Message } = require('./Message')
const { Schema } = mongoose;

let schema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    username: {
        type: String,
        required: [true, 'Username is required']
    },
    passwordDigest: {
        type: String,
        required: [true, 'Password is required']
    },
    inbox: [messageSchema]
});

module.exports.User = mongoose.model('User', schema);
module.exports.defaultMessages = [
    new Message({
        subject: 'Welcome!',
        content: 'Welcome to this demo of a project from the Full Stack extended program! Congratulations on completing the introductory course!',
        from: 'HackerUSA',
        sent: new Date,
        isRead: false
    }),
    new Message({
        subject: 'An Urgent Message',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
        from: 'HackerUSA',
        sent: new Date,
        isRead: false
    }),
    new Message({
        subject: 'Straight Spam',
        content: 'Don\'t event open it',
        from: 'Spamsalot',
        sent: new Date,
        isRead: false
    }),
  
  
]