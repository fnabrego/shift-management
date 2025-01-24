import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Date, HydratedDocument } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { Schedule } from '../../schedule/schema/schedule.schema';
import { Status } from '../enum/status.enum';
import { TimeSlot } from '../../time-slot/schema/time-slot.schema';
import { Patient } from '../../user/schema/patient.schema';
import { Professional } from '../../user/schema/professional.schema';

export type AppointmentDocument = HydratedDocument<Appointment>;

@Schema({ timestamps: true })
export class Appointment {

    @Prop({ default: uuidv4 })
    _id: string;

    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Patient' })
    patient_id: Patient;

    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Professional' })
    professional_id: Professional;

    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Schedule' })
    schedule_id: Schedule;

    @Prop({ type: Date, required: true })
    date: Date;

    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'TimeSlot' })
    time_slot: TimeSlot;

    @Prop({ required: true, enum: Object.values(Status), default: 'Schedule' })
    status: Status;

}

export const AppointmentSchema = SchemaFactory.createForClass(Appointment);

AppointmentSchema.index(
    { professional_id: 1, date: 1, time_slot: 1 },
    { unique: true, name: 'unique_appointment_per_time_slot' }
)