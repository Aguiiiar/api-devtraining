import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dtos/create-course.dto';
import { UpdateCourseDto } from './dtos/update-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  public async findAll() {
    return this.coursesService.findAll();
  }

  @Get(':id')
  public async findOne(@Param('id') id: string) {
    return this.coursesService.findOne(id);
  }

  //   @Post()
  //   public async create(@Body() body) {
  //     return body;
  //   }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  public async create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto);
  }

  @Patch(':id')
  public async update(
    @Param('id') id: string,
    @Body() updateCourseDto: UpdateCourseDto,
  ) {
    return this.coursesService.update(id, updateCourseDto);
  }

  @Delete(':id')
  public async remove(@Param('id') id: string) {
    return this.coursesService.remove(id);
  }
}
