import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Healthcare } from './schema/healthcare.schema';
import { Model } from 'mongoose';

@Injectable()
export class HealthcareService {
    constructor(
        @InjectModel(Healthcare.name) private healthcareModel: Model<Healthcare>,
    ) { }

    async getHealthcares() {
        return 'Todos las obras sociales';
    }
    async getHealthcareById() {
        return 'Obra social por Id'
    }
    async createHealthcare() {
        return 'Nueva obra social'
    }
    async updateHealthcareById() {
        return 'Modificacion de obra social';
    }
    async deleteHealthcareById() {
        return 'Eliminacion de obra social'
    }
}
