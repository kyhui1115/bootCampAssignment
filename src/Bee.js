const Grub = require('./Grub');
// food 속성은 grub으로부터 상속
// eat 메소드도 상속
class Bee extends Grub{
  constructor() {
    super();
    this.age = 5;
    this.color = 'yellow'
    this.job = 'Keep on growing'
  }
}

module.exports = Bee;
