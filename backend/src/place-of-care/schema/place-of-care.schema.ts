
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type PlacesOfCareDocument = HydratedDocument<PlaceOfCare>;

@Schema({ timestamps: true })
export class PlaceOfCare {

    @Prop({ default: uuidv4 })
    _id: string;

    @Prop({ required: true })
    name: string;

}

export const PlacesOfCareSchema = SchemaFactory.createForClass(PlaceOfCare);