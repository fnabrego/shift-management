import { Module } from '@nestjs/common';
import { ProfessionalController } from './professional.controller';
import { ProfessionalService } from './professional.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Professional, ProfessionalsSchema } from './schema/professional.schema';

@Module({
  imports:[MongooseModule.forFeature([{name: Professional.name, schema:ProfessionalsSchema}])],
  controllers: [ProfessionalController],
  providers: [ProfessionalService]
})
export class ProfessionalModule {}
