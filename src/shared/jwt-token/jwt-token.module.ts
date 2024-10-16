import { Module } from '@nestjs/common';
import { JwtTokenService } from './jwt-token.service';
import { JwtModule } from '@nestjs/jwt';
import { envs } from '../env-values';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: envs.JWT.SECRET,
      signOptions: { expiresIn: '7d' },
    }),
  ],
  providers: [JwtTokenService],
  exports: [JwtTokenService],
})
export class JwtTokenModule {}
