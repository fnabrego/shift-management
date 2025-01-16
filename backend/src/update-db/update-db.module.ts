import { Module } from '@nestjs/common';
import { DatabaseUpdateController } from './update-db.controller';
import { DatabaseUpdateService } from './update-db.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CitiesSchema, City } from '../city/schema/city.schema';
import { State, StatesSchema } from '../state/schema/state.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: City.name, schema: CitiesSchema }, { name: State.name, schema: StatesSchema }])],
    controllers: [DatabaseUpdateController],
    providers: [DatabaseUpdateService]
})
export class UpdateDbModule { }
