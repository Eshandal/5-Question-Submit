// Task 2;
let personName :string = "ERIC";
console.log(`hello ${personName},would you like to learn some Python today`);

// Task 3;
//lower Case
let personName :string ="ESHAN";
console.log("lowercase:", personName.toLowerCase());

//upper case
console.log("uppercase:", personName.toLocaleUpperCase());

//title case
console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));

// Task 4;
let qoute: string ="A person who never made a mistake never tried anything new";
let auther :string ="Albert Einstein";
console.log(`${auther}once said, "${qoute}`);

// Task 5;
let qoute: string ="A person who never made a mistake never tried anything new";
let famous_person ="Albert Einstein";
let message =`${famous_person}once said, "${qoute}`;
console.log(message);