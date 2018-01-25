'use strict';

const reader = module.exports = {};
const fs = require('fs');
const arr = [];

reader.booyah = (paths, cb) => {
  fs.readFile(paths[0], (error, data) => {
    if (error) cb(error);
    arr.push(data.toString());
    fs.readFile(paths[1], (error, data) => {
      if (error) cb(error);
      arr.push(data.toString());
      fs.readFile(paths[2], (error, data) => {
        if (error) cb(error);
        arr.push(data.toString());
        cb(null, arr);
      });
    });
  });
};