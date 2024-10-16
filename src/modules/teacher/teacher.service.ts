import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { TeacherRepo } from 'src/shared/database/repositories/teacher.repositories';
import { SignupTeacherDto } from './dto/signup-teacher.dto';
import { compare, hash } from 'bcrypt';
import { SigninTeacherDto } from './dto/signin-teacher.dto';
import { JwtTokenService } from 'src/shared/jwt-token/jwt-token.service';

@Injectable()
export class TeacherService {
  constructor(
    private readonly teacherRepo: TeacherRepo,
    private readonly jwtService: JwtTokenService,
  ) {}

  async signup(signupTeacherDto: SignupTeacherDto) {
    const { name, cpf, date, password } = signupTeacherDto;

    const dateObject = new Date(date);
    const studentExist = await this.teacherRepo.findUnique({
      where: {
        cpf,
      },
    });

    if (studentExist) {
      throw new ConflictException('This CPF already in use!');
    }

    const hashedPassword = await hash(password, 12);

    await this.teacherRepo.create({
      data: {
        name,
        cpf,
        date: dateObject,
        password: hashedPassword,
      },
    });
  }

  async signin(signinTeacherDto: SigninTeacherDto) {
    const { cpf, password } = signinTeacherDto;

    const studentAuthenticate = await this.teacherRepo.findUnique({
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

    const accessToken = await this.jwtService.generateAcessToken(
      studentAuthenticate.id,
    );

    return {
      accessToken,
    };
  }
}
