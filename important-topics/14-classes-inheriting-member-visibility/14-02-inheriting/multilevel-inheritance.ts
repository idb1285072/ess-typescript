class LivingBeing {
  breathe(): void {
    console.log('Breathing...');
  }
}

class Animal extends LivingBeing {
  move(): void {
    console.log('Moving...');
  }
}

class Dog extends Animal {
  bark(): void {
    console.log('Barking...');
  }
}

const rex = new Dog();
rex.breathe(); // inherited from LivingBeing
rex.move(); // inherited from Animal
rex.bark(); // defined in Dog
