const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
}

const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
}

const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleOptions    
    })
    .command('remove', 'Remove a note',{
        title: titleOptions
    })
    .help()
    .argv;
//var command = process.argv[2];
var command = argv._[0];

//console.log('Process', process.argv);
//console.log('Yargs', argv);

if (command === 'add') {    
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Note created');
        notes.logNote(note);
    } else {
        console.log('Note title taken');
    }
} else if (command === 'list') {
    var allNotes = notes.getAll();    
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
    var note = notes.getNote(argv.title);    
    var message = note ? `Fetching note: ${argv.title}` : `*** Note not found: : ${argv.title}`;
    console.log(message);    
    if (note) {
        notes.logNote(note);
    }
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
} else {
    console.log('Command not recognized');
}

/*
console.log(_.isString(true));
console.log(_.isString('Ian'));
var filteredArray = _.uniq(['Andrew',1,'Andrew',1,2,3,4]);
console.log(filteredArray);

var res = notes.addNote();

console.log(`Result: ${notes.add(9,-2)}`);

var user = os.userInfo();
fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, err => {
    if (err) {
        console.log('Unable to write to file');
    }    
});*/
