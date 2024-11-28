import { Module } from '@nestjs/common';
import { HealthcareController } from './healthcare.controller';
import { HealthcareService } from './healthcare.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Healthcare, HealthcaresSchema } from './schema/healthcare.schema';

@Module({
  imports:[MongooseModule.forFeature([{name: Healthcare.name, schema:HealthcaresSchema}])],
  controllers: [HealthcareController],
  providers: [HealthcareService]
})
export class HealthcareModule {}
