
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, HydratedDocument } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type ProfessionalDocument = HydratedDocument<Professional>;

@Schema()
export class Professional {

    @Prop({ default: uuidv4 })
    _id: string;

    @Prop({ required: true })
    firstName: string;

    @Prop()
    secondName: string;

    @Prop({ required: true })
    lastName: string;

    @Prop({ required: true })
    dni: number;

    @Prop({ required: true })
    age: number;

    @Prop({ required: true })
    birthdate: Date;

    @Prop({ required: true })
    mail: string;

    @Prop({ required: true })
    registration: string;

    @Prop({ required: true })
    validity: Date;

    @Prop({required: true}) // {type: mongoose.Schema.Types.ObjectID, ref:'Specialty'}
    specialty: string;  //! tabla de specialty

    @Prop() // {type: mongoose.Schema.Types.ObjectID, ref:'PlaceOfCare'}
    placeOfCare: string;    //! tabla de placeOfCare

    @Prop({ required: true }) //{ type: mongoose.Schema.Types.ObjectId, ref: 'States' }
    state: string;  //! tabla de states

    @Prop({ required: true })   //{ type: mongoose.Schema.Types.ObjectId, ref: 'Cities' }
    city: string;   //! tabla de cities

    @Prop() //{ type: mongoose.Schema.Types.ObjectId, ref: 'Healthcares' }
    healthcare: string[]; //! tabla de healthcare

    @Prop()
    plan: string[];

    @Prop() //{ type: mongoose.Schema.Types.ObjectId, ref: 'Appointments' }
    appointments: string; //! tabla de appointments

    @Prop({ required: true })
    role: string;   //! enum de roles

    @Prop() //{ type: mongoose.Schema.Types.ObjectId, ref: 'Stories' }
    stories: string;    //! tabla de stories

    @Prop({ default: false })
    isDeleted: boolean;

}

export const ProfessionalSchema = SchemaFactory.createForClass(Professional);