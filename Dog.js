function Dog(){
    this.stomach = [];
}

Dog.prototype.eat(mouse){
    this.stomach.push(mouse);
    mouse.dead = true;
    return this;
}
module.exports = Dog;