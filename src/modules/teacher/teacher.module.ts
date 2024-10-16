import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import { JwtTokenModule } from 'src/shared/jwt-token/jwt-token.module';

@Module({
  imports: [JwtTokenModule],
  controllers: [TeacherController],
  providers: [TeacherService],
})
export class TeacherModule {}
