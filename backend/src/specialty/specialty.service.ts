import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Specialty } from './schema/specialty.schema';

@Injectable()
export class SpecialtyService {constructor(
    @InjectModel(Specialty.name) private specialtyModel: Model<Specialty>,
) { }

async getSpecialties() {
    return 'Todos las especialidades';
}
async getSpecialtyById() {
    return 'Especialidad por Id'
}
async createSpecialty() {
    return 'Nuevo especialidad'
}
async updateSpecialtyById() {
    return 'Modificacion de especialidad';
}
async deleteSpecialtyById() {
    return 'Eliminacion de especialidad'
}}
