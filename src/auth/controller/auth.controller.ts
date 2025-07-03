import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { LocalAuthGuard } from '../guard/local-auth.guard';
import { UsuarioLogin } from '../entities/usuario-login.entity';

@Controller('/usuarios')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Post('/logar')
  login(@Body() usuario: UsuarioLogin): Promise<any> {
    return this.authService.login(usuario);
  }
}
