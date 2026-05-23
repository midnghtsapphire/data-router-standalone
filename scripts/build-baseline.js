const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const requiredPaths = [
  'backend/main.py',
  'frontend/package.json',
  'docker-compose.yml'
];

const missing = requiredPaths.filter((p) => !fs.existsSync(path.join(root, p)));
if (missing.length > 0) {
  console.error(`Missing required build paths: ${missing.join(', ')}`);
  process.exit(1);
}

const compose = fs.readFileSync(path.join(root, 'docker-compose.yml'), 'utf8');
for (const service of ['backend:', 'frontend:']) {
  if (!compose.includes(service)) {
    console.error(`docker-compose.yml must include service: ${service}`);
    process.exit(1);
  }
}

console.log('Baseline build checks passed.');
