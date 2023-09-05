class Fairy {
  constructor(name, dust = 10) {
    this.name = name,
    this.dust = dust,
    this.clothes = {dresses: ['Iris']},
    this.disposition = 'Good natured',
    this.humanWards = []
  }

  receiveBelief() {
    this.dust += 1;
  }

  believe() {
    this.dust += 10;
  }

  makeDresses(flowers) {
    for (var i = 0; i < flowers.length; i++){
      this.clothes.dresses.push(flowers[i]);
    }
  }

  provoke() {
    this.disposition = 'Vengeful';
  }

  replaceInfant(infant) {
    if (this.disposition === 'Vengeful') {
      this.humanWards.push(infant)
      infant.disposition = 'Malicious';
      this.simmerDown()
    }
    return infant;
  }

  simmerDown() {
    if (this.humanWards.length === 3) {
      this.disposition = 'Good natured';
    }
  }
}

module.exports = Fairy;