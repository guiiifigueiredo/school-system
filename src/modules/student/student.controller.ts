import { Body, Controller, Post } from '@nestjs/common';
import { StudentService } from './student.service';
import { SignupStudentDto } from './dto/signup-student.dto';
import { SigninStudentDto } from './dto/signin-student.dto';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post('signup')
  signup(@Body() signupStudentDto: SignupStudentDto) {
    return this.studentService.signup(signupStudentDto);
  }

  @Post('signin')
  signin(@Body() signinStudentDto: SigninStudentDto) {
    return this.studentService.signin(signinStudentDto);
  }
}
