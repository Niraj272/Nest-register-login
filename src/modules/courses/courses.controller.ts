import { Body, Controller, Get, Post } from '@nestjs/common';
import {CoursesService} from '../courses/courses.service'
import {CourseDto} from './course.dto'

@Controller('courses')
export class CoursesController {
    constructor(private CoursesService:CoursesService ){}
    
    @Get()  
    async getAll(){
      const getdata = await this.CoursesService.getAll();
      return getdata;
    }

    @Post()
    async adddata(@Body() CourseDto: CourseDto){
        const course = await this.CoursesService.create(CourseDto);
        console.log(course);
        
        return course;
      }
    
}
