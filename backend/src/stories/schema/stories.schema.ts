
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Date, HydratedDocument } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { Patient } from '../../user/schema/patient.schema';
import { Professional } from '../../user/schema/professional.schema';


export type StoriesDocument = HydratedDocument<Story>;

@Schema({ timestamps: true })
export class Story {
    @Prop({ default: uuidv4 })
    _id: string;

    @Prop({ type: Date, required: true })
    date: Date;

    @Prop({ required: true })
    information: string;

    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Patient' })
    patient_id: Patient;

    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Professional' })
    professional_id: Professional;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'PlaceOfCare' })
    placeOfCare_id: string;

    @Prop({ default: false, select: false })
    isDeleted: boolean;

}

export const StoriesSchema = SchemaFactory.createForClass(Story);