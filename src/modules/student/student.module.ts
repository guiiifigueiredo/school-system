import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { PrismaService } from 'src/shared/database/prisma.service';
import { JwtTokenModule } from 'src/shared/jwt-token/jwt-token.module';

@Module({
  imports: [JwtTokenModule],
  controllers: [StudentController],
  providers: [StudentService, PrismaService],
})
export class StudentModule {}
