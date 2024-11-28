import { Module } from '@nestjs/common';
import { CityController } from './city.controller';
import { CityService } from './city.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CitiesSchema, City } from './schema/city.schema';

@Module({
  imports:[MongooseModule.forFeature([{name: City.name, schema:CitiesSchema}])],
  controllers: [CityController],
  providers: [CityService]
})
export class CityModule {}
