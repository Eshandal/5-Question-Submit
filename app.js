// Task 2;
var personName = "ERIC";
console.log("hello ".concat(personName, ",would you like to learn some Python today"));
// Task 3;
//lower Case
var personName = "ESHAN";
console.log("lowercase:", personName.toLowerCase());
//upper case
console.log("uppercase:", personName.toLocaleUpperCase());
//title case
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
// Task 4;
var qoute = "A person who never made a mistake never tried anything new";
var auther = "Albert Einstein";
console.log("".concat(auther, "once said, \"").concat(qoute));
// Task 5;
var qoute = "A person who never made a mistake never tried anything new";
var famous_person = "Albert Einstein";
var message = "".concat(famous_person, "once said, \"").concat(qoute);
console.log(message);
