export class CompetitionItem {
    id: number;
    itemNumber: string;
    name: string;
    gender: string;
    level: string;
    competitionType: string;
    memberNumber: number;
    fee: number;
    constructor(id: number, itemNumber: string, name: string, gender: string, level: string,
        competitionType: string, memberNumber: number, fee: number) {
      this.id = id;
      this.itemNumber = itemNumber;
      this.name = name;
      this.gender = gender;
      this.level = level;
      this.competitionType = competitionType;
      this.memberNumber = memberNumber;
      this.fee = fee;
    }
}
