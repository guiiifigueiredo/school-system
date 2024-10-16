import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtTokenService {
  constructor(private readonly jwtService: JwtService) {}
  async generateAcessToken(userId: string) {
    return this.jwtService.signAsync({ sub: userId });
  }
}
