import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TimeSlot, TimeSlotsSchema } from './schema/time-slot.schema';
import { TimeSlotController } from './time-slot.controller';
import { TimeSlotService } from './time-slot.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: TimeSlot.name, schema: TimeSlotsSchema }])],
    controllers: [TimeSlotController],
    providers: [TimeSlotService]
})
export class TimeSlotModule { }
