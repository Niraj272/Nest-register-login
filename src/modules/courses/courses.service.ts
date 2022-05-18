import { Injectable, Inject } from '@nestjs/common';
import { CourseDto } from './course.dto';
import { COURSE_REPOSITORY } from '../../core/constants';
import { Course } from './courses.entity';


@Injectable()
export class CoursesService {

    constructor(@Inject(COURSE_REPOSITORY) private readonly courseRepository: typeof Course) { }
    async getAll() {
        return await this.courseRepository.findAll();
    }
    
    async create(course: CourseDto) {
        //console.log( this.courseRepository.create(course));

        return await this.courseRepository.create(course);
    }

    async findOneByEmail(email: string): Promise<Course> {
        return await this.courseRepository.findOne<Course>({ where: { email } });
    }

    async findOneById(id: number): Promise<Course> {
        return await this.courseRepository.findOne<Course>({ where: { id } });
    }
}
