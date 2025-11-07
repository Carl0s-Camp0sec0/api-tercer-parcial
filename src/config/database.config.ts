import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root', 
  password: 'inmortal66', 
  database: 'tercer_parcial_db',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true, 
  logging: true, // Para ver las consultas SQL en consola
};