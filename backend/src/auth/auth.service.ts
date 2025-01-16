import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PatientService } from '../patient/patient.service';
import { ProfessionalService } from '../professional/professional.service';
import { Patient } from '../patient/schema/patient.schema';
import { Professional } from '../professional/schema/professional.schema';
import { CreatePatientDto, LoginPatientDto } from '../patient/dto/patient.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly patientService: PatientService,
        private readonly professionalService: ProfessionalService,
        private readonly jwtService: JwtService
    ) { }
    async signUp(patientSignup: CreatePatientDto) {
        const operation = await this.patientService.createPatient(patientSignup);
        console.log(operation)
        return operation;
    }
    async signIn(patientSignin: LoginPatientDto) {
        const { email, password } = patientSignin;

        //const patient = await this.patientService.getPatientByEmail(email);
        
    }
}
