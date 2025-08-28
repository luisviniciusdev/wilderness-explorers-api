import { Injectable } from '@nestjs/common';
import { RegisterAuthDto } from './dtos/register-auth.dto';
import { LoginAuthDto } from './dtos/login-auth.dto';
import { RefreshTokenDto } from './dtos/refresh-token.dto';
import { ForgotPasswordDto } from './dtos/forgot-password.dto';
import { ResetPasswordDto } from './dtos/reset-password.dto';

@Injectable()
export class AuthService {
  async register(registerAuthDto: RegisterAuthDto) {
    // user creation logic
    return { message: 'register not implemented' };
  }

  async login(loginAuthDto: LoginAuthDto) {
    // login logic and JWT generation
    return { message: 'login not implemented' };
  }

  async refreshToken(refreshTokenDto: RefreshTokenDto) {
    // token refresh logic
    return { message: 'refreshToken not implemented' };
  }

  async forgotPassword(forgotPasswordDto: ForgotPasswordDto) {
    // email sending logic
    return { message: 'forgotPassword not implemented' };
  }

  async resetPassword(resetPasswordDto: ResetPasswordDto) {
    // password reset logic
    return { message: 'resetPassword not implemented' };
  }

  async getProfile() {
    // returns logged in user data
    return { message: 'getProfile not implemented' };
  }

  async logout() {
    // invalid refresh token
    return { message: 'logout not implemented' };
  }
}
