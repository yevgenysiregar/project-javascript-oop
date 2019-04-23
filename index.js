class Player {
  constructor(
    position = "Unknown position",
    name = "Unknown name",
    club = "Unknown club",
    number = "Unknown number"
  ) {
    this.position = position;
    this.name = name;
    this.club = club;
    this.number = number;
  }

  showPlayerInfo() {
    console.log(`${this.name} plays in ${this.club} as a ${this.position}`);
  }

  getPlayerNumber() {
    return this.number;
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

console.log(lfcPlayer.getPlayerNumber);

class PlayerInfo extends Player {
  constructor({ position, name, club, number, award, goals }) {
    super(position, name, club, number);
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

const lfcStriker = new PlayerInfo({
  position: "Striker",
  name: "Mo Salah",
  club: "Liverpool FC",
  number: "11",
  award: "PFA Player of the Year 2017/2018",
  goals: "19"
});

console.log(lfcStriker);

lfcStriker.showPlayerInfo();

console.log(lfcStriker.getGoals());

console.log(lfcStriker.getAward());
