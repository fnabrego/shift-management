import { Body, Controller, HttpCode, Post, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { CreatePatientDto, LoginPatientDto } from '../patient/dto/patient.dto';
import { CreateProfessionalDto } from '../professional/dto/professional.dto';
//import { CreateUserDto, LogginUserDto } from 'src/users/user.dto';
//import { DateAdderInterceptor } from 'src/interceptors/dateAdder.interceptor';
//import { EmailInterceptor } from '../interceptors/emailLowercase.interceptor';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }

    @HttpCode(201)
    @Post('signup')
    newUser(@Body() patient: CreatePatientDto) {
        delete patient.confirmPassword;
        return this.authService.signUp(patient)
    }

    @HttpCode(200)
    @Post('signin')
    signIn(@Body() patient: LoginPatientDto) {
        return this.authService.signIn(patient);
    }

}

