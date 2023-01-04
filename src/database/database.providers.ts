import { CourseRefactoringTest1672821154014 } from 'src/migrations/1672821154014-CourseRefactoringTest';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'sqlite',
        database: 'db.sqlite',
        entities: [__dirname + '/**/*.entity.js'],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];

export const dataSource = new DataSource({
  type: 'sqlite',
  database: 'db.sqlite',
  entities: [__dirname + '/**/*.entity.js'],
  synchronize: true,
  migrations: [CourseRefactoringTest1672821154014],
});
