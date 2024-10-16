import { Controller, Post, Body } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { SignupTeacherDto } from './dto/signup-teacher.dto';
import { SigninTeacherDto } from './dto/signin-teacher.dto';

@Controller('teacher')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Post('signup')
  signup(@Body() signupTeacherDto: SignupTeacherDto) {
    return this.teacherService.signup(signupTeacherDto);
  }

  @Post('signin')
  signin(@Body() signinTeacherDto: SigninTeacherDto) {
    return this.teacherService.signin(signinTeacherDto);
  }
}
