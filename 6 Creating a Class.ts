interface Opponent {
  alias: string;
  health: number;
}

class ComicBookCharacter {
    private team: {
        name: string,
        members: ComicBookCharacter[]
    };

    attackFunc(opponent: Opponent, attackWith: number) {
        opponent.health -= attackWith;
        console.log(`${this.alias} attacked ${opponent.alias} whos's health = ${opponent.health}`);
    }

    getSecretIdentity() { console.log(`${this.alias}'s secret identity is ${this.secretIdentity}`);}

    constructor(
        public alias: string, public health: number, public strength: number,
        private secretIdentity: string
    ) {}

    static createAndAssignTeam(teamName: string, members: ComicBookCharacter[]) {
        let team = {
            name: teamName,
            members: members
        };

        members.forEach((member) => {
            member.team = team;
        });
    }

    getTeamName() { console.log(`${this.alias} is on Team ${this.team.name}`);}
}

let storm = new ComicBookCharacter("storm", 100, 100, "Ororo Munroe");
let theBlob = new ComicBookCharacter("The Blob", 1000, 5000, "Fred J. Dukes");

storm.attackFunc(theBlob, storm.strength);
storm.getSecretIdentity();

ComicBookCharacter.createAndAssignTeam("oddCouple", [storm, theBlob]);
theBlob.getTeamName();