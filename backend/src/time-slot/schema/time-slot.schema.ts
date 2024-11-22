
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type TimeSlotsDocument = HydratedDocument<TimeSlot>;

@Schema()
export class TimeSlot {

    @Prop({ default: uuidv4 })
    _id: string;

    @Prop({ required: true })
    name: string;

}

export const TimeSlotsSchema = SchemaFactory.createForClass(TimeSlot);