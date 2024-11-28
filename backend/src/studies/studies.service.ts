import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Study } from './schema/studies.schema';

@Injectable()
export class StudiesService {
    constructor(
        @InjectModel(Study.name) private studyModel: Model<Study>,
    ) { }

    async getStudies() {
        return 'Todos los estudios';
    }
    async getStudyById() {
        return 'Estudio por Id'
    }
    async createStudy() {
        return 'Nuevo estudio'
    }
    async updateStudyById() {
        return 'Modificacion de estudio';
    }
    async deleteStudyById() {
        return 'Eliminacion de estudio'
    }
}
