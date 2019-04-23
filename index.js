class Player {
  constructor(
    position = "Unknown position",
    name = "Unknown name",
    club = "Unknown club",
    playerNumber = "Unknown number"
  ) {
    this.position = position;
    this.name = name;
    this.club = club;
    this.playerNumber = playerNumber;
  }

  showPlayerInfo() {
    console.log(`${this.name} plays in ${this.club} as a ${this.position}`);
  }

  getPlayerNumber() {
    return this.playerNumber;
  }

  showPlayerNumber() {
    console.log(`This player wears number ${this.playerNumber}`);
  }
}

const lfcPlayer = new Player(
  "Defender",
  "Virgil van Dijk",
  "Liverpool FC",
  "4"
);

console.log(lfcPlayer);

lfcPlayer.showPlayerInfo();

console.log(lfcPlayer.getPlayerNumber());

lfcPlayer.showPlayerNumber();

class TopPlayer extends Player {
  constructor({ position, name, club, playerNumber, award, goals }) {
    super(position, name, club, playerNumber);
    this.award = award;
    this.goals = goals;
  }
  getAward() {
    return this.award;
  }

  getGoals() {
    return this.goals;
  }
}

const lfcStriker = new TopPlayer({
  position: "Striker",
  name: "Mo Salah",
  club: "Liverpool FC",
  playerNumber: "11",
  award: "PFA Player of the Year 2017/2018",
  goals: 19
});

console.log(lfcStriker);

lfcStriker.showPlayerInfo();

console.log(lfcStriker.getGoals());

console.log(lfcStriker.getAward());
