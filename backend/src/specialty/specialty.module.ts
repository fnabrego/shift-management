import { Module } from '@nestjs/common';
import { SpecialtyController } from './specialty.controller';
import { SpecialtyService } from './specialty.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SpecialtiesSchema, Specialty } from './schema/specialty.schema';

@Module({
  imports:[MongooseModule.forFeature([{name: Specialty.name, schema:SpecialtiesSchema}])],
  controllers: [SpecialtyController],
  providers: [SpecialtyService]
})
export class SpecialtyModule {}
