function Cat(){
    this.stomach = [];
}

Cat.prototype.eat = function(mouse){
    this.stomach.push(mouse);
    mouse.dead = true;
    return this;
}
module.exports = Cat;