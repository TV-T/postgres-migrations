const { copyFileSync, mkdirSync } = require('fs');
const { join } = require('path');

const path = '/migrations/0_create-migrations-table.sql';
mkdirSync(join(__dirname, 'dist/migrations'), { recursive: true });
copyFileSync(join(__dirname, `src${path}`), join(__dirname, `dist${path}`));
