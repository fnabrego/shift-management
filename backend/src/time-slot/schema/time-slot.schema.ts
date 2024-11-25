
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { Schedule } from '../../schedule/schema/schedule.schema';

export type TimeSlotsDocument = HydratedDocument<TimeSlot>;

@Schema({ timestamps: true })
export class TimeSlot {

    @Prop({ default: uuidv4 })
    _id: string;

    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Schedule' })
    schedule_id: Schedule;

    @Prop({ required: true })
    start_time: string;

    @Prop({ required: true })
    end_time: string;
}

export const TimeSlotsSchema = SchemaFactory.createForClass(TimeSlot);