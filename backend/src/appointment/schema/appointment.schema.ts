import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, HydratedDocument } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type AppointmentsDocument = HydratedDocument<Appointment>;

@Schema()
export class Appointment {

    @Prop({ default: uuidv4 })
    _id: string;

    @Prop()
    professional_id: string;

    @Prop()
    patient_id: string;

    @Prop()
    date: Date;

    @Prop()
    time_slot: string;

    @Prop()
    status: string;

}

export const AppointmentsSchemas = SchemaFactory.createForClass(Appointment);