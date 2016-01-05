#!/usr/bin/env babel-node

let fs = require('pn/fs')
let filename=process.argv[2];

  async function ls(filename){
    try{

	process.stdout.write(filename)
	await fs.exists(filename, function (exists) {
  	console.log(exists ? "it's there" : 'no file!');
});

	let fd=fs.openSync(filename,'r+')
	fs.futimes(fd, new Date(), new Date(), function (err){
	console.log(err);
	});

    }
    catch(e){
		console.log(e.stack)
	}
}
ls(filename)