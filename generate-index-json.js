const fs = require('fs');
const path = require('path');

// set directories and paths
let currentDirectory = process.cwd();
const lastIndex = currentDirectory.lastIndexOf('sdemo-hack');
console.log(lastIndex)
const splicedPath = currentDirectory.slice(0, lastIndex);

console.log(splicedPath);
  console.log('Current directory:', splicedPath);
const methodsDir = path.join(splicedPath, 'methods');
const indexFile = path.join(methodsDir, 'index.json');

// Process all method files and generate an index file
(async () => {

  const allMethods = [];
  process.stdout.write('Processing:');
  fs.readdirSync(methodsDir).forEach(filename => {
    // skip index file
    if(filename === 'index.json') {
      return;
    }

    const methodFile = path.join(methodsDir, filename);
    const methodData = fs.readFileSync(methodFile, 'utf-8');
    process.stdout.write(' ' + filename);

    try {
      const methodJson = JSON.parse(methodData);
      allMethods.push(methodJson);
    } catch(e) {
        console.error('\n\n❌ ERROR: Failed to parse', filename, e);
        process.exit(1);
    }
  });

  if(allMethods.length > 0) {
    fs.writeFileSync(indexFile, JSON.stringify(allMethods, null, 2), 'utf-8');
    console.log("allMethods",allMethods)
    // console.log('\n\nGenerated /methods/index.json.');
    const currentDirectory = process.cwd();
  console.log('Current directory:', currentDirectory);
  const indexData = fs.readFileSync(indexFile, 'utf-8');
  console.log('Index File Path',indexFile)
  const indexJson = JSON.parse(indexData);
  console.log('Index File Contents:', indexJson);
  } else {
    console.error('\n\n❌ ERROR: No methods found in methods directory');
    process.exit(1);
  }

})();
