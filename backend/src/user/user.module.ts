import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { Patient, PatientSchemas} from './schema/patient.schema';
import { Professional, ProfessionalsSchema } from './schema/professional.schema';
import { User, UserSchemas } from './schema/user.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: User.name, schema:UserSchemas},{name: Patient.name, schema:PatientSchemas}, {name: Professional.name, schema:ProfessionalsSchema}])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
