import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dtos/create-course.dto';
import { UpdateCourseDto } from './dtos/update-course.dto';

describe('CoursesService', () => {
  let service: CoursesService;
  let id;
  let data;

  beforeEach(async () => {
    service = new CoursesService();
    id: '848aee84-8c0c-11ed-a1eb-0242ac120002';
    data: new Date();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a course', async () => {
    const expectOuputTags = [
      {
        id,
        name: 'nest',
      },
    ];

    const expectOuputCourse = {
      id,
      name: 'Curso de NestJs',
      description: 'treinamento de nestjs',
      tags: expectOuputTags,
    };

    const mockCourseRepository = {
      create: jest.fn().mockReturnValue(Promise.resolve(expectOuputCourse)),
      save: jest.fn().mockReturnValue(Promise.resolve(expectOuputCourse)),
    };

    const mockTagRepository = {
      create: jest.fn().mockReturnValue(Promise.resolve(expectOuputTags)),
      findOne: jest.fn().mockReturnValue(Promise.resolve(expectOuputTags)),
    };

    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCourseRepository;
    //@ts-expect-error defined part of methods
    service['tagRepository'] = mockTagRepository;

    const createCourseDto: CreateCourseDto = {
      name: 'Test',
      description: 'Test description',
      tags: ['nestjs'],
    };

    const newCourse = await service.create(createCourseDto);

    expect(mockCourseRepository.save).toHaveBeenCalled();
    expect(expectOuputCourse).toStrictEqual(newCourse);
    // const updateCourseDto: UpdateCourseDto = {};
  });

  it('should list courses', async () => {
    const expectOuputTags = [
      {
        id,
        name: 'nest',
      },
    ];

    const expectOuputCourse = [
      {
        id,
        name: 'Curso de NestJs',
        description: 'treinamento de nestjs',
        tags: expectOuputTags,
      },
    ];

    const mockCourseRepository = {
      findAll: jest.fn().mockReturnValue(Promise.resolve(expectOuputCourse)),
      find: jest.fn().mockReturnValue(Promise.resolve(expectOuputCourse)),
    };

    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCourseRepository;

    const courses = await service.findAll();

    expect(mockCourseRepository.find).toHaveBeenCalled();
    expect(expectOuputCourse).toStrictEqual(courses);
    // const updateCourseDto: UpdateCourseDto = {};
  });

  it('should gets a courses', async () => {
    const expectOuputTags = [
      {
        id,
        name: 'nest',
      },
    ];

    const expectOuputCourse = [
      {
        id,
        name: 'Curso de NestJs',
        description: 'treinamento de nestjs',
        tags: expectOuputTags,
      },
    ];

    const mockCourseRepository = {
      findOne: jest.fn().mockReturnValue(Promise.resolve(expectOuputCourse)),
    };

    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCourseRepository;

    const course = await service.findOne(id);

    expect(mockCourseRepository.findOne).toHaveBeenCalled();
    expect(expectOuputCourse).toStrictEqual(course);
  });

  it('should update a course', async () => {
    const expectOuputTags = [
      {
        id,
        name: 'nest',
      },
    ];

    const expectOuputCourse = {
      id,
      name: 'Curso de NestJs',
      description: 'treinamento de nestjs',
      tags: expectOuputTags,
    };

    const mockCourseRepository = {
      update: jest.fn().mockReturnValue(Promise.resolve(expectOuputCourse)),
      save: jest.fn().mockReturnValue(Promise.resolve(expectOuputCourse)),
      preload: jest.fn().mockReturnValue(Promise.resolve(expectOuputCourse)),
    };

    const mockTagRepository = {
      create: jest.fn().mockReturnValue(Promise.resolve(expectOuputTags)),
      findOne: jest.fn().mockReturnValue(Promise.resolve(expectOuputTags)),
    };

    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCourseRepository;
    //@ts-expect-error defined part of methods
    service['tagRepository'] = mockTagRepository;

    const updateCourseDto: UpdateCourseDto = {
      name: 'Test',
      description: 'Test description',
      tags: ['nestjs'],
    };

    const course = await service.update(id, updateCourseDto);

    expect(mockCourseRepository.save).toHaveBeenCalled();
    expect(expectOuputCourse).toStrictEqual(course);
    // const updateCourseDto: UpdateCourseDto = {};
  });

  it('should remove course', async () => {
    const expectOuputTags = [
      {
        id,
        name: 'nest',
      },
    ];

    const expectOuputCourse = [
      {
        id,
        name: 'Curso de NestJs',
        description: 'treinamento de nestjs',
        tags: expectOuputTags,
      },
    ];

    const mockCourseRepository = {
      findOne: jest.fn().mockReturnValue(Promise.resolve(expectOuputCourse)),
      remove: jest.fn().mockReturnValue(Promise.resolve(expectOuputCourse)),
    };

    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCourseRepository;

    await service.remove(id);

    expect(mockCourseRepository.remove).toHaveBeenCalled();
  });
});
