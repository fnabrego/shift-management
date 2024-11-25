
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Date, HydratedDocument } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { Specialty } from '../../specialty/schema/specialty.schema';
import { PlaceOfCare } from '../../place-of-care/schema/place-of-care.schema';
import { State } from '../../state/schema/state.schema';
import { City } from '../../city/schema/city.schema';
import { Healthcare } from '../../healthcare/schema/healthcare.schema';
import { Appointment } from '../../appointment/schema/appointment.schema';
import { Role } from '../../roles/roles.enum';
import { Story } from '../../stories/schema/stories.schema';

export type ProfessionalsDocument = HydratedDocument<Professional>;

@Schema({ timestamps: true })
export class Professional {

    @Prop({ default: uuidv4 })
    _id: string;

    @Prop({ required: true })
    firstName: string;

    @Prop()
    secondName: string;

    @Prop({ required: true })
    lastName: string;

    @Prop({ required: true })
    dni: number;

    @Prop({ required: true })
    birthdate: Date;

    @Prop({ required: true })
    mail: string;

    @Prop({ required: true, select: false })
    password: string;

    @Prop({ required: true })
    registration: string;

    @Prop({ required: true })
    validity: Date;

    @Prop({ required: true, type: [mongoose.Schema.Types.ObjectId], ref: 'Specialty' })
    specialty: Specialty[];

    @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'PlaceOfCare' })
    placeOfCare: PlaceOfCare;

    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'State' })
    state: State;

    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'City' })
    city: City;

    @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Healthcare' })
    healthcare: Healthcare[];

    @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Appointment' })
    appointments: Appointment[];

    @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Story' })
    stories: Story[];

    @Prop({ required: true, enum: Role, default: 'professional' })
    role: Role;

    @Prop({ default: false, select: false })
    isDeleted: boolean;

}

export const ProfessionalsSchema = SchemaFactory.createForClass(Professional);