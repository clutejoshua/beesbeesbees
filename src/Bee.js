var Bee = function() {
  this.age = 5;
  this.color = 'yellow';
  this.food = Grub.call(this, food);




};




Bee.prototype = new Grub();
Bee.prototype.constructor = Bee;