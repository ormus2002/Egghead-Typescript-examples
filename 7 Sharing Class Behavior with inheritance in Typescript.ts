class ComicBookCharacter {
  constructor(
      public alias: string, public health: number, public strength: number,
      protected secretIdentity: string
    ) {}
}

class SuperHero extends ComicBookCharacter {
  traits = ["empathy", "strong moral code"];

}

class SuperVillain extends ComicBookCharacter {
  flaws = ["hubris", "always explains evil plan"];
  getSecretId() { console.log(this.secretIdentity); }

  constructor(a,b,c,d) {
    super(a,b,c,d);
    console.log(`${this.alias} eats kittens!!!`);
  }
}

let jubilee = new SuperHero("Jubilee", 23, 233, "Jubilation Lee");
let scarletWitch = new SuperVillain("Scarlet Witch", 233, 4444, "Wanda");

console.log(scarletWitch.getSecretId());