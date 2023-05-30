const fs = require('fs');
const path = require('path');

const methodsDir = path.join(__dirname, './allProjects');
const indexFile = path.join(methodsDir, 'index.json');

const allMethods = [];
process.stdout.write('Processing:');
fs.readdirSync(methodsDir).forEach((filename) => {
  if (filename === 'index.json') {
    return;
  }

  const methodFile = path.join(methodsDir, filename);
  const methodData = fs.readFileSync(methodFile, 'utf-8');
  process.stdout.write(' ' + filename);

  try {
    const methodJson = JSON.parse(methodData);
    allMethods.push(methodJson);
  } catch (e) {
    console.error('\n\n❌ ERROR: Failed to parse', filename, e);
    process.exit(1);
  }
});

if (allMethods.length > 0) {
  fs.writeFileSync(indexFile, JSON.stringify(allMethods, null, 2), 'utf-8');
  console.log('\n\nGenerated /methods/index.json.');
} else {
  console.error('\n\n❌ ERROR: No methods found in methods directory');
  process.exit(1);
}
