const yargs = require('yargs');
const notes = require('./notes');
// console.log(notes)
// console.log(typeof(notes))
// Customize yargs version

yargs.version('1.1.0');

// add, remove, read, list  distinct commands

// Create add command

yargs.command({
  command: 'add',
  describe: 'Adds a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Remove a note',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

yargs.command({
  command: 'list',
  describe: 'Shows all notes',
  handler() {
    notes.listNotes();
  },
});

yargs.command({
  command: 'read',
  describe: 'Reads a note',
  builder: {
    title: {
      describe: 'Read a note',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

yargs.parse();
// console.log(yargs.argv)
// console.log(process.argv)
