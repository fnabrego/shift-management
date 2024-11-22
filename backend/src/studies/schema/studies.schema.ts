
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, HydratedDocument } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type StudiesDocument = HydratedDocument<Study>;

@Schema()
export class Study {

    @Prop({ default: uuidv4 })
    _id: string;

    @Prop({ required: true })
    date: Date;

    @Prop({ required: true })
    information: string;

    @Prop({ required: true }) // {type: mongoose.Schema.Types.ObjectID, ref:'Specialty'}
    specialty: string;  //! tabla de specialty

    @Prop() // {type: mongoose.Schema.Types.ObjectID, ref:'PlaceOfCare'}
    placeOfCare: string;    //! tabla de placeOfCare

    @Prop() //{ type: mongoose.Schema.Types.ObjectId, ref: 'Healthcares' }
    healthcare: string; //! tabla de healthcare

    @Prop()
    plan: string;

    @Prop()
    nJoined: string;

    @Prop({ default: false })
    isDeleted: boolean;

}

export const StudiesSchema = SchemaFactory.createForClass(Study);