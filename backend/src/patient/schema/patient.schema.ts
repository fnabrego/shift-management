
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Date, HydratedDocument } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { State } from '../../state/schema/state.schema';
import { City } from '../../city/schema/city.schema';
import { Healthcare } from '../../healthcare/schema/healthcare.schema';
import { Appointment } from '../../appointment/schema/appointment.schema';
import { Role } from '../../roles/roles.enum';
import { Story } from '../../stories/schema/stories.schema';

export type PatientDocument = HydratedDocument<Patient>;

@Schema({ timestamps: true })
export class Patient {

    @Prop({ default: uuidv4 })
    _id: string;

    @Prop({ required: true })
    first_name: string;

    @Prop({ required: false })
    second_name: string;

    @Prop({ required: true })
    last_name: string;

    @Prop({ required: true, maxlength: 8, minlength: 7 })
    dni: number;

    @Prop({ required: true })
    birthdate: Date;

    @Prop({ required: true })
    mail: string;

    @Prop({ required: true, select: false })
    password: string;

    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'State' })
    state: State;

    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'City' })
    city: City;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Healthcare' })
    healthcare: Healthcare;

    @Prop()
    num_joined: string;

    @Prop()
    plan: string;

    @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Appointment' })
    appointments: Appointment[];

    @Prop({ required: true, enum: Role, default: 'patient' })
    role: Role;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Stories' })
    stories: Story[];

    @Prop({type: URL})
    profile_picture: string;

    @Prop({ default: false, select: false })
    isDeleted: boolean;

}

export const PatientSchema = SchemaFactory.createForClass(Patient);