import {Coach} from './coach.model';

export class Member {
    id: number;
    name: string;
    idNumber: string;
    birthday: Date;
    coach: Coach;
    constructor(id: number, name: string, idNumber: string, birthday: Date, coach: Coach) {
      this.id = id;
      this.name = name;
      this.idNumber = idNumber;
      this.birthday = birthday;
      this.coach = coach;
    }
}
