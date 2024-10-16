import { Module } from '@nestjs/common';
import { AcademicDepartmentService } from './academic-department.service';
import { AcademicDepartmentController } from './academic-department.controller';

@Module({
  controllers: [AcademicDepartmentController],
  providers: [AcademicDepartmentService],
})
export class AcademicDepartmentModule {}
