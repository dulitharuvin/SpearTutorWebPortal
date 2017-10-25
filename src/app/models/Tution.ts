import { Day, TimeOfTheDay, TutionSize, TutionType } from './enums';

export class Tution {
    name: string;
    year: number;
    day: Day;
    subject: string;
    size: TutionSize;
    type: TutionType;
    startTime: Date;
    timeOfTheDay: TimeOfTheDay;
    institute: string;
    location: string;
}

export class TutionList {
    name: string;
    subject: string;
    type: string;
    year: string;
    location: string;
    noOfStudents: number;
}