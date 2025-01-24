import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { State } from '../../state/schema/state.schema';
import { City } from '../../city/schema/city.schema';
import { UserRole } from '../../roles/roles.enum';
import { UUID } from 'crypto';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {

    @Prop({ default: uuidv4 })
    _id: UUID;

    @Prop({ required: true })
    first_name: string;

    @Prop({ required: false })
    second_name: string;

    @Prop({ required: true })
    last_name: string;

    @Prop({ required: true, maxlength: 8, minlength: 7 })
    dni: number;

    @Prop({type: String, required: true })
    birthdate: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true, select: false })
    password: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'State' })
    state_id: State;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'City' })
    city_id: City;

    @Prop({ required: true, enum: UserRole, default: 'patient' })
    role: UserRole;

    @Prop({type: URL})
    profile_picture: string;

    @Prop({ default: false, select: false })
    isDeleted: boolean;

}

export const UserSchemas = SchemaFactory.createForClass(User);