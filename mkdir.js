#!/usr/bin/env babel-node
let fs = require('pn/fs')
let dir = process.argv[2];

async function createDirectory(dirPath){
let directoryPath = dirPath ==! '' ? path.join(__dirname, dirPath) : __dirname;
process.stdout.write('dirPath=' + dirPath + '\n')
await fs.mkdir(dirPath);
}

createDirectory(dir)