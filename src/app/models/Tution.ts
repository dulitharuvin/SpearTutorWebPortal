import { Day } from './enums/day';
import { TimeOfTheDay } from './enums/times-of-the-day';
import { TutionSize } from './enums/tution-size';
import { TutionType } from './enums/tution-types';

export class Tution {
    name: string;
    year: number;
    day: Day;
    subject: string;
    size: TutionSize;
    type: TutionType;
    startTime: Date;
    timeOfDay: TimeOfTheDay;
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