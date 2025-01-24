
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { BaseUser } from '../shared/user';
import { Healthcare } from '../../healthcare/schema/healthcare.schema';

export type PatientDocument = HydratedDocument<Patient>;

@Schema({ timestamps: true })
export class Patient extends BaseUser {

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Healthcare' })
    healthcare_id: Healthcare;

    @Prop()
    num_joined: string;

    @Prop()
    plan: string;

}

export const PatientSchemas = SchemaFactory.createForClass(Patient);