#!/usr/bin/env babel-node

let fs = require('pn/fs');
let filePath = process.argv[2];

fs.stat(filePath, function(err, stats) {
if (err) {
console.log(JSON.stringify(err));
} else {
if (stats.isFile()) {
fs.unlink(filePath, function(err) {
if (err) {
console.log(err);
}
});
}

if (stats.isDirectory()) {
fs.rmdir(filePath, function(err) {
if (err) {
console.log(err);
} 
});
}
}
});