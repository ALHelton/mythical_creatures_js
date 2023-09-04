class Medusa {
  constructor(name) {
    this.name = name,
    this.statues = []
  }

  stare(victim) {
    if (this.statues.length === 3) {
      this.statues[0].stoned = false;
      this.statues.shift();
    }
    victim.stoned = true;
    this.statues.push(victim);
  }
}

module.exports = Medusa;