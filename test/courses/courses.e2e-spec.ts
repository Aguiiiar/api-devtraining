import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { CoursesModule } from '../../src/courses/courses.module';
import * as request from 'supertest';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ValidationPipe } from '@nestjs/common/pipes';
import { CreateCourseDto } from 'src/courses/dtos/create-course.dto';
import { HttpStatus } from '@nestjs/common/enums';

describe('Courses: /courses', () => {
  let app: INestApplication;

  const course: CreateCourseDto = {
    name: 'NestJs com TypeORM',
    description: 'Criando api restful com nestjs',
    tags: ['nest', 'node', 'js', 'ts', 'typeorm'],
  };

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        CoursesModule,
        TypeOrmModule.forRoot({
          type: 'sqlite',
          database: 'db-test.sqlite',
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          autoLoadEntities: true,
          synchronize: true,
        }),
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );
    await app.init();
  });

  it('Create POST /courses', () => {
    return request(app.getHttpServer())
      .post('/courses')
      .send(course)
      .expect(HttpStatus.CREATED)
      .then(({ body }) => {
        const expectCourse = jasmine.objectContaining({
          ...course,
          tags: jasmine.arrayContaining(
            course.tags.map((name) => jasmine.objectContaining({ name })),
          ),
        });

        expect(body).toEqual(expectCourse);
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
