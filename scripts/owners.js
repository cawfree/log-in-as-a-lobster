const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');
const appRootPath = require('app-root-path');

const results = [];

const assets = path.resolve(`${appRootPath}`, 'assets');

const lobsters_owners_csv = path.resolve(
  assets,
  '9f6f98070cc2afb1f72d4c2f90c6e31b-ce32d3cbde407a4df1feea7f65af487ab29cf019',
  'lobsters_owners.csv'
);

const lobsters_owners_json = path.resolve(assets, 'lobsters_owners.json');

fs.createReadStream(lobsters_owners_csv)
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => fs.writeFileSync(lobsters_owners_json, JSON.stringify(results)));
