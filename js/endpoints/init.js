const {script} = require('@greenminds/nf-app-logic');
const endpoints = require('./index');

module.exports = script(endpoints);
