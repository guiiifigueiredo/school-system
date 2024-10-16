import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentsRepo {
  constructor(private readonly prismaService: PrismaService) {}
  create(studentDto: Prisma.StudentsCreateArgs) {
    return this.prismaService.students.create(studentDto);
  }

  findUnique(studentDto: Prisma.StudentsFindUniqueArgs) {
    return this.prismaService.students.findUnique(studentDto);
  }
}
