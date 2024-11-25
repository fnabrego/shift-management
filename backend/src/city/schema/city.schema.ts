
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { State } from '../../state/schema/state.schema';

export type CitiesDocument = HydratedDocument<City>;

@Schema({ timestamps: true })
export class City {

    @Prop({ default: uuidv4 })
    _id: string;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'State' })
    state_id: State;

}

export const CitiesSchema = SchemaFactory.createForClass(City);