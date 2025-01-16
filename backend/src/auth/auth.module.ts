import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PatientService } from '../patient/patient.service';
import { ProfessionalService } from '../professional/professional.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Patient, PatientSchemas } from '../patient/schema/patient.schema';
import { Professional, ProfessionalsSchema } from '../professional/schema/professional.schema';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [MongooseModule.forFeature([{ name: Patient.name, schema: PatientSchemas }, { name: Professional.name, schema: ProfessionalsSchema }])],
  controllers: [AuthController],
  providers: [AuthService, PatientService, ProfessionalService, JwtService]
})
export class AuthModule { }
