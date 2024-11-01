import { Module } from '@nestjs/common';
import { PlaceOfCareController } from './place-of-care.controller';
import { PlaceOfCareService } from './place-of-care.service';

@Module({
  controllers: [PlaceOfCareController],
  providers: [PlaceOfCareService]
})
export class PlaceOfCareModule {}
