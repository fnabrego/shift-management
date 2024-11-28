import { Module } from '@nestjs/common';
import { PlaceOfCareController } from './place-of-care.controller';
import { PlaceOfCareService } from './place-of-care.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PlaceOfCare, PlacesOfCareSchema } from './schema/place-of-care.schema';

@Module({
  imports:[MongooseModule.forFeature([{name: PlaceOfCare.name, schema:PlacesOfCareSchema}])],
  controllers: [PlaceOfCareController],
  providers: [PlaceOfCareService]
})
export class PlaceOfCareModule {}
