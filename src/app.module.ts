import { Module } from '@nestjs/common';
import { PrismaService } from './shared/database/prisma.service';
import { StudentModule } from './modules/student/student.module';
import { TeacherModule } from './modules/teacher/teacher.module';
import { DatabaseModule } from './shared/database/database.module';
import { AcademicDepartmentModule } from './modules/academic-department/academic-department.module';
import { JwtTokenModule } from './shared/jwt-token/jwt-token.module';

@Module({
  imports: [
    StudentModule,
    TeacherModule,
    DatabaseModule,
    AcademicDepartmentModule,
    JwtTokenModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
