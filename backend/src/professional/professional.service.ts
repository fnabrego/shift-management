import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema } from 'mongoose';
import { User } from '../user/schema/user.schema';
import { Patient } from '../user/schema/patient.schema';
import { Professional } from '../user/schema/professional.schema';

@Injectable()
export class ProfessionalService {
    constructor(
        @InjectModel(User.name) private userModel: Model<User>,
        /* @InjectModel(Patient.name) private patientModel: Model<Patient>, */
        @InjectModel(Professional.name) private professionalModel: Model<Professional>,
    ) { }

    async getProfessionals() {
        return 'Todos los profesionales';
    }
    async getProfessionalById() {
        return 'Profesional por Id'
    }
    async createProfessional() {
        return 'Nuevo Profesional'
    }
    async updateProfessionalById() {
        return 'Modificacion de Profesional';
    }
    async deleteProfessionalById() {
        return 'Eliminacion de Profesional'
    }
}
