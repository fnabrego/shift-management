import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfessionalController } from './professional.controller';
import { ProfessionalService } from './professional.service';
import { Professional, ProfessionalsSchema } from '../user/schema/professional.schema';
import { User, UserSchemas } from '../user/schema/user.schema';


@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchemas }, { name: Professional.name, schema: ProfessionalsSchema }])],
  controllers: [ProfessionalController],
  providers: [ProfessionalService]
})
export class ProfessionalModule { }
