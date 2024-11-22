
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type StatesDocument = HydratedDocument<State>;

@Schema()
export class State {

    @Prop({ default: uuidv4 })
    _id: string;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })   //{ type: mongoose.Schema.Types.ObjectId, ref: 'Cities' }
    cities: string[];   //! tabla de cities

}

export const StatesSchema = SchemaFactory.createForClass(State);