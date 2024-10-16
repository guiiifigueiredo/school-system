import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TeacherRepo {
  constructor(private readonly prismaService: PrismaService) {}
  create(teacherDto: Prisma.TeacherCreateArgs) {
    return this.prismaService.teacher.create(teacherDto);
  }

  findUnique(teacherDto: Prisma.TeacherFindUniqueArgs) {
    return this.prismaService.teacher.findUnique(teacherDto);
  }
}
