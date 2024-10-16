import { IsNotEmpty, IsString } from 'class-validator';

export class SigninStudentDto {
  @IsString()
  @IsNotEmpty()
  cpf: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
