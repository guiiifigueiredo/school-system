import { IsNotEmpty, IsString } from 'class-validator';

export class SigninTeacherDto {
  @IsString()
  @IsNotEmpty()
  cpf: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
