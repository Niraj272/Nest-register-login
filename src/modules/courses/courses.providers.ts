import { Course } from './courses.entity';
import { COURSE_REPOSITORY } from '../../core/constants';

export const coursesProviders= [{
    provide: COURSE_REPOSITORY,
    useValue: Course,
}];