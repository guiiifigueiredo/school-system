import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class SignupStudentDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  cpf: string;

  @IsDateString()
  date: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
