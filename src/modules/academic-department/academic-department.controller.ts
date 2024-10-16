import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AcademicDepartmentService } from './academic-department.service';
import { CreateAcademicDepartmentDto } from './dto/create-academic-department.dto';
import { UpdateAcademicDepartmentDto } from './dto/update-academic-department.dto';

@Controller('academic-department')
export class AcademicDepartmentController {
  constructor(
    private readonly academicDepartmentService: AcademicDepartmentService,
  ) {}

  @Post()
  create(@Body() createAcademicDepartmentDto: CreateAcademicDepartmentDto) {
    return this.academicDepartmentService.create(createAcademicDepartmentDto);
  }

  @Get()
  findAll() {
    return this.academicDepartmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.academicDepartmentService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAcademicDepartmentDto: UpdateAcademicDepartmentDto,
  ) {
    return this.academicDepartmentService.update(
      +id,
      updateAcademicDepartmentDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.academicDepartmentService.remove(+id);
  }
}
