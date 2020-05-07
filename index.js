var Dog = require('./Dog');
var Mouse = require('./Mouse');
var Cat = require('./Cat');

let mickey = new Mouse('Mickey');
let tom = new Cat();

tom.eat(mickey);
conssole.log(tom);