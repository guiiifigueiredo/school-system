import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { StudentsRepo } from './repositories/students.repositories';
import { TeacherRepo } from './repositories/teacher.repositories';

@Global()
@Module({
  providers: [PrismaService, StudentsRepo, TeacherRepo],
  exports: [StudentsRepo, TeacherRepo],
})
@Module({})
export class DatabaseModule {}
