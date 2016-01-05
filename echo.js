#!/usr/bin/env node

for (var i = 2 ; i < process.argv.length; i++) {
	process.stdout.write(process.argv[i]+'\n');
}
	
