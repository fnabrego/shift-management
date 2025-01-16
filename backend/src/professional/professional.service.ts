import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Model, Schema } from 'mongoose';
import { Professional } from './schema/professional.schema';

@Injectable()
export class ProfessionalService {
    constructor(
        @InjectModel(Professional.name)  private professionalModel: Model <Professional>,
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
