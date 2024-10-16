import { Injectable } from '@nestjs/common';
import { CreateAcademicDepartmentDto } from './dto/create-academic-department.dto';
import { UpdateAcademicDepartmentDto } from './dto/update-academic-department.dto';

@Injectable()
export class AcademicDepartmentService {
  create(createAcademicDepartmentDto: CreateAcademicDepartmentDto) {
    return 'This action adds a new academicDepartment';
  }

  findAll() {
    return `This action returns all academicDepartment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} academicDepartment`;
  }

  update(id: number, updateAcademicDepartmentDto: UpdateAcademicDepartmentDto) {
    return `This action updates a #${id} academicDepartment`;
  }

  remove(id: number) {
    return `This action removes a #${id} academicDepartment`;
  }
}
