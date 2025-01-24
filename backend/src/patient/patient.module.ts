import { Module } from '@nestjs/common';
import { PatientController } from './patient.controller';
import { PatientService } from './patient.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Patient, PatientSchemas } from '../user/schema/patient.schema';
import { User, UserSchemas } from '../user/schema/user.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchemas }, { name: Patient.name, schema: PatientSchemas }])],
  controllers: [PatientController],
  providers: [PatientService]
})
export class PatientModule { }
