import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Specialty } from '../../specialty/schema/specialty.schema';
import { PlaceOfCare } from '../../place-of-care/schema/place-of-care.schema';
import { BaseUser } from '../shared/user';

export type ProfessionalsDocument = HydratedDocument<Professional>;

@Schema({ timestamps: true })
export class Professional extends BaseUser {

    @Prop({ required: true })
    registration: string;

    @Prop({ required: true, type: String })
    validity: string;

    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Specialty' })
    specialty: Specialty[];

    @Prop({ type: mongoose.Schema.Types.String, ref: 'PlaceOfCare' })
    placeOfCare: PlaceOfCare[];

}

export const ProfessionalsSchema = SchemaFactory.createForClass(Professional);