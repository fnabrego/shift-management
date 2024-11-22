
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type HealthcaresDocument = HydratedDocument<Healthcare>;

@Schema()
export class Healthcare {

    @Prop({ default: uuidv4 })
    _id: string;

    @Prop({ required: true })
    name: string;

}

export const HealthcaresSchema = SchemaFactory.createForClass(Healthcare);