import { Body, Controller, Post } from '@nestjs/common';
import {CoursesService} from '../courses/courses.service'
import {CourseDto} from './course.dto'

@Controller('courses')
export class CoursesController {
    constructor(private CoursesService:CoursesService ){}
    
    @Post()
    async adddata(@Body() CourseDto: CourseDto){
        const course = await this.CoursesService.create(CourseDto);
        console.log(course);
        
        return course;
      }
    
}
