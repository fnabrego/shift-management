import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from '../user/user.service';
import { PatientService } from '../patient/patient.service';
import { ProfessionalService } from '../professional/professional.service';
import { User } from '../user/schema/user.schema';
import { GoogleLoginUserDto, LoginUserDto } from '../user/dto/user.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly patientService: PatientService,
        private readonly professionalService: ProfessionalService,
        private readonly jwtService: JwtService
    ) { }

    async signUp(userSignup: Partial<User>) {
        const findUser = await this.userService.getUserByEmail(userSignup.email);
        if (findUser) throw new BadRequestException('Invalid Credentials');

        const hashedPassword: string = await bcrypt.hash(userSignup.password, 10);
        if (!hashedPassword) throw new BadRequestException('Hashed Error');

        return this.userService.createUser({ ...userSignup, password: hashedPassword })

    }
    async signIn(userSignin: LoginUserDto) {
        const findUser = await this.userService.getUserByEmail(userSignin.email);
        if (!findUser) throw new UnauthorizedException('Invalid Credentials');

        const isPassword = await bcrypt.compare(userSignin.password, findUser.password);
        if (!isPassword) throw new UnauthorizedException('Invalid Credentials');

        const userPayload = {
            id: findUser._id,
            email: findUser.email,
            role: findUser.role
        };

        const token = this.jwtService.sign(userPayload);

        return { message: 'Loging OK', token };

    }
    async googleSignIn(data: GoogleLoginUserDto) {
        const { email } = data;
        if (!email) throw new BadRequestException('Email required');

        const user = await this.userService.getUserByEmail(email);
        if (!user) throw new UnauthorizedException('Invalid Credentials');

        const userPayload = {
            id: user._id,
            email: user.email,
            role: user.role
        };
        const token = this.jwtService.sign(userPayload);

        return { message: 'Loging OK', token };

    }
}
