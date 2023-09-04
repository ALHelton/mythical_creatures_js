class Centaur {
  constructor(name, breed) {
    this.name = name,
    this.breed = breed,
    this.cranky = false,
    this.standing = true,
    this.runCount = 0,
    this.shootCount = 0,
    this.layingDown = false
  }

  shoot() {
    this.shootCount += 1;
    this.determineMood();
    if (this.cranky === true || this.layingDown === true) { return 'NO!' };
    return 'Twang!!!';
  }

  run() {
    this.runCount += 1;
    this.determineMood();
    if (this.layingDown === true) { return 'NO!' };
    return 'Clop clop clop clop!!!';
  }

  determineMood() {
    if (this.runCount + this.shootCount > 2) { this.cranky = true };
  }

  sleep() {
    if (this.standing === true) { return 'NO!' };
    this.reset();
    this.cranky = false;
    return 'ZZZZ';
  }

  layDown() {
    this.layingDown = true;
    this.standing = false;
  }

  standUp() {
    this.layingDown = false;
    this.standing = true;
  }

  drinkPotion() {
    if (this.standing === false) { return 'Not while I\'m laying down!' };
    this.cranky = this.runCount + this.shootCount < 2;
    this.reset();
  }

  reset() {
    this.runCount = 0;
    this.shootCount = 0;
  }
}

module.exports = Centaur;