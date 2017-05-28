#! /usr/bin/env node

var ansi = require("ansi-escapes");
var keypress = require("keypress");

// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);

// listen for the "keypress" event
process.stdin.on('keypress', function (ch, key) {
	if (key.name === 'c' && key.ctrl) {
		process.stdout.write(ansi.eraseLine + ansi.cursorTo(0));
		process.exit();
	} else {
		toggler.toggle();
	}
});

var toggler = {
	showing: false,
	toggle: function() {
		this.showing = !this.showing;
		if (this.showing)
			process.stdout.write(`Hello world`);
		else
			process.stdout.write(ansi.eraseLine + ansi.cursorTo(0));
	}
}

process.stdin.setRawMode(true);
process.stdin.resume();
