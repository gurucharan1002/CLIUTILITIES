#!/usr/bin/env babel-node

let fs = require('pn/fs')
let argv = require('yargs').argv
let filename=process.argv[2]
  async function ls(filename){
    try{

	process.stdout.write(filename)
	let data = await fs.readFile(filename)
	process.stdout.write(data+'\n')

    }
    catch(e){
		console.log(e.stack)
	}
}
ls(filename)