const { copyFileSync } = require('fs');
const { join } = require('path');

const path = '/migrations/0_create-migrations-table.sql';

copyFileSync(join(__dirname, `src${path}`), join(__dirname, `dist${path}`));
