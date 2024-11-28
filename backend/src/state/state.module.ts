import { Module } from '@nestjs/common';
import { StateController } from './state.controller';
import { StateService } from './state.service';
import { MongooseModule } from '@nestjs/mongoose';
import { State, StatesSchema } from './schema/state.schema';

@Module({
  imports:[MongooseModule.forFeature([{name: State.name, schema:StatesSchema}])],
  controllers: [StateController],
  providers: [StateService]
})
export class StateModule {}
