import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from './src/users/users.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'nestjs',  // Change as per your database user
  password: 'password',  // Change to your password
  database: 'users_db',
  entities: [User],
  synchronize: true, // Auto-create tables (disable in production)
};