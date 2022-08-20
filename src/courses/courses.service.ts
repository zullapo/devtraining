import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [];

  constructor() {
    this.courses = [
      {
        id: 1,
        name: 'Fundamentos NestJS',
        description: 'Fundamentos NestJS',
        tags: ['node.js', 'nestjs', 'typescript', 'javascript'],
      },
    ];
  }

  findAll() {
    return this.courses;
  }

  findOne(id: string) {
    const course = this.courses.find((course) => course.id === parseInt(id));
    if (!course) {
      throw new HttpException(
        `Course of id ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
    return course;
  }

  create(createCourseDto: any) {
    this.courses.push(createCourseDto);
    return createCourseDto;
  }

  update(id: string, updateCourseDto: any) {
    const indexCourse = this.courses.findIndex(
      (course) => course.id == parseInt(id),
    );
    if (indexCourse >= 0) {
      this.courses[indexCourse] = updateCourseDto;
    }
  }

  remove(id: string) {
    const indexCourse = this.courses.findIndex(
      (course) => course.id == parseInt(id),
    );
    if (indexCourse >= 0) {
      this.courses.splice(indexCourse, 1);
    }
  }
}
