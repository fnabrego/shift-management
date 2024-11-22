
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type CitiesDocument = HydratedDocument<City>;

@Schema()
export class City {

    @Prop({ default: uuidv4 })
    _id: string;

    @Prop({ required: true })
    name: string;

}

export const CitiesSchema = SchemaFactory.createForClass(City);