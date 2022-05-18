import { Body, Controller, Get, Header, HttpException, Post, UseFilters } from '@nestjs/common';
import {CoursesService} from '../courses/courses.service'
import {CourseDto} from './course.dto'
import { Headers} from '@nestjs/common';

@Controller('courses')
export class CoursesController {
    constructor(private CoursesService:CoursesService ){}
    
    @Get()
    // (@Headers("jwt_token") Headers
    async getAll(){
      console.log(Headers);
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
