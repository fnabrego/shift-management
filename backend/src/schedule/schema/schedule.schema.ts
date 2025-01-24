
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { DayOfWeek } from '../../time-slot/enum/day_of_week.enum';
import { Professional } from '../../user/schema/professional.schema';

export type SchedulesDocument = HydratedDocument<Schedule>;

@Schema({ timestamps: true })
export class Schedule {

    @Prop({ default: uuidv4 })
    _id: string;

    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Professional' })
    professional_id: Professional;

    @Prop({ required: true, enum: Object.values(DayOfWeek) })
    day_of_week: DayOfWeek;

    @Prop({ required: true })
    start_time: string;

    @Prop({ required: true })
    end_time: string;

}

export const SchedulesSchema = SchemaFactory.createForClass(Schedule);