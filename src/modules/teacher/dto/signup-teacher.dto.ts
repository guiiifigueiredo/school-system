import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class SignupTeacherDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  cpf: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsDateString()
  date: string;
}
