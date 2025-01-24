import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PatientService } from '../patient/patient.service';
import { ProfessionalService } from '../professional/professional.service';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import { Patient, PatientSchemas } from '../user/schema/patient.schema';
import { Professional, ProfessionalsSchema } from '../user/schema/professional.schema';
import { UserService } from '../user/user.service';
import { User, UserSchemas } from '../user/schema/user.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchemas }, { name: Patient.name, schema: PatientSchemas }, { name: Professional.name, schema: ProfessionalsSchema }])],
  controllers: [AuthController],
  providers: [AuthService, PatientService, ProfessionalService, JwtService, UserService]
})
export class AuthModule { }
