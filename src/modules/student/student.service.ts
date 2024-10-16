import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { StudentsRepo } from 'src/shared/database/repositories/students.repositories';
import { compare, hash } from 'bcrypt';
import { SigninStudentDto } from './dto/signin-student.dto';
import { JwtTokenService } from 'src/shared/jwt-token/jwt-token.service';
import { SignupStudentDto } from './dto/signup-student.dto';

@Injectable()
export class StudentService {
  constructor(
    private readonly studentsRepo: StudentsRepo,
    private readonly jwtTokenService: JwtTokenService,
  ) {}

  async signup(signupStudentDto: SignupStudentDto) {
    const { name, cpf, date, password } = signupStudentDto;

    const dateObject = new Date(date);
    const studentExist = await this.studentsRepo.findUnique({
      where: {
        cpf,
      },
    });

    if (studentExist) {
      throw new ConflictException('This CPF already in use!');
    }

    const hashedPassword = await hash(password, 12);

    await this.studentsRepo.create({
      data: {
        name,
        cpf,
        date: dateObject,
        password: hashedPassword,
      },
    });
  }

  async signin(signinStudentDto: SigninStudentDto) {
    const { cpf, password } = signinStudentDto;

    const studentAuthenticate = await this.studentsRepo.findUnique({
      where: {
        cpf,
      },
    });

    if (!studentAuthenticate) {
      throw new UnauthorizedException('Invalid Crendencials!!');
    }

    const validPassword = await compare(password, studentAuthenticate.password);

    if (!validPassword) {
      throw new UnauthorizedException('Invalid Crendencials!!');
    }

    const accessToken = await this.jwtTokenService.generateAcessToken(
      studentAuthenticate.id,
    );

    return {
      accessToken,
    };
  }
}
