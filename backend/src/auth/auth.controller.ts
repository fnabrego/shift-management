import { Body, Controller, HttpCode, Post, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto, GoogleLoginUserDto, LoginUserDto } from '../user/dto/user.dto';
import { EmailInterceptor } from '../interceptors/emailLowerCase.interceptor';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }

    @HttpCode(201)
    @Post('signup')
    @UseInterceptors(EmailInterceptor)
    @ApiOperation({ summary: 'Crear usuario' })
    newUser(@Body() user: CreateUserDto) {
        delete user.confirmPassword;
        return this.authService.signUp(user)
    }

    @HttpCode(200)
    @Post('signin')
    @ApiOperation({ summary: 'Iniciar sesion' })
    signIn(@Body() credentials: LoginUserDto) {
        return this.authService.signIn(credentials);
    }

    @HttpCode(200)
    @Post('google/signin')
    @ApiOperation({ summary: 'Registro/Login con Google' })
    async googleSignIn(@Body() data: GoogleLoginUserDto) {
        return this.authService.googleSignIn(data);
    }

}

