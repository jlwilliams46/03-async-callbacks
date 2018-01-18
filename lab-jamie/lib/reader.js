'use strict';

const fs = require('fs');
let i = 0;

module.exports = (paths, callback) => {
  do {
    fs.readFile(paths[i], (err, data) => {
      return callback(err) ? callback(null, data.toString()) : undefined;
    });
    i++;
  } while (i < paths.length);
};