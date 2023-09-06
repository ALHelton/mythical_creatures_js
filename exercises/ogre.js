class Ogre {
  constructor(name, home = 'Swamp') {
    this.name = name,
    this.home = home,
    this.swings = 0
  }

  encounter(human) {
    human.encounterCounter += 1;
    if (human.noticesOgre()) {this.swingAt()};
    if (this.swings > 0 && this.swings % 2 === 0) { human.knockedOut = true};
  }

  swingAt() {
    this.swings += 1;
  }

  apologize(human) {
    human.knockedOut = false
  }
}

module.exports = Ogre;