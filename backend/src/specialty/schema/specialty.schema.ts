
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type SpecialtiesDocument = HydratedDocument<Specialty>;

@Schema({ timestamps: true })
export class Specialty {

    @Prop({ default: uuidv4 })
    _id: string;

    @Prop({ required: true })
    name: string;

}

export const SpecialtiesSchema = SchemaFactory.createForClass(Specialty);