import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TimeSlotController } from './time-slot.controller';
import { TimeSlotService } from './time-slot.service';
import { TimeSlot, TimeSlotsSchema } from './schema/time-slot.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: TimeSlot.name, schema: TimeSlotsSchema }])],
    controllers: [TimeSlotController],
    providers: [TimeSlotService]
})
export class TimeSlotModule { }
