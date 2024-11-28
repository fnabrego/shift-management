import { Module } from '@nestjs/common';
import { ScheduleController } from './schedule.controller';
import { ScheduleService } from './schedule.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Schedule, SchedulesSchema } from './schema/schedule.schema';

@Module({
  imports:[MongooseModule.forFeature([{name: Schedule.name, schema:SchedulesSchema}])],
  controllers: [ScheduleController],
  providers: [ScheduleService]
})
export class ScheduleModule {}
