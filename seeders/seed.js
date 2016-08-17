var Umzug = require('umzug');
var umzug = new Umzug({});

umzug.execute({
  migrations: ['20160816071154'],
//   seeders: ['20160816081331'],
  method: 'up'
}).then(function (migrations) {
  // "migrations" will be an Array of all executed/reverted migrations.
});