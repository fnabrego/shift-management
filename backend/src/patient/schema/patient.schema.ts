
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, HydratedDocument } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type PatientDocument = HydratedDocument<Patient>;

@Schema()
export class Patient {

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

    @Prop({ required: true }) //{ type: mongoose.Schema.Types.ObjectId, ref: 'States' }
    state: string;  //! tabla de states

    @Prop({ required: true })   //{ type: mongoose.Schema.Types.ObjectId, ref: 'Cities' }
    city: string;   //! tabla de cities

    @Prop() //{ type: mongoose.Schema.Types.ObjectId, ref: 'Healthcares' }
    healthcare: string; //! tabla de healthcare

    @Prop()
    nJoined: string;

    @Prop()
    plan: string;

    @Prop() //{ type: mongoose.Schema.Types.ObjectId, ref: 'Appointments' }
    appointments: string; //! tabla de appointments

    @Prop({ required: true })
    role: string;   //! enum de roles

    @Prop() //{ type: mongoose.Schema.Types.ObjectId, ref: 'Stories' }
    stories: string;    //! tabla de stories

    @Prop({ default: false })
    isDeleted: boolean;

}

export const PatientSchema = SchemaFactory.createForClass(Patient);