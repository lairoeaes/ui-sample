import {Coach} from './coach.model';
import {CompetitionItem} from './competition-item.model';
import {CompetitionUnit} from './competition-unit.model';
import {Member} from './member.model';

export class Team {
    id: number;
    competitionItem: CompetitionItem;
    coach: Coach;
    competitionUnit: CompetitionUnit;
    members: Member[];
    constructor(id: number, competitionItem: CompetitionItem, coach: Coach, competitionUnit: CompetitionUnit, members: Member[]) {
        this.id = id;
        this.competitionItem = competitionItem;
        this.coach = coach;
        this.competitionUnit = competitionUnit;
        this.members = members;
    }
    check() {
        if (!this.competitionItem) {
            return false;
        }
        if (!this.coach) {
            return false;
        }
        if (!this.competitionUnit) {
            return false;
        }
        if (!this.members || this.members.length !== this.competitionItem.memberNumber) {
            return false;
        }
        return true;
    }
}
