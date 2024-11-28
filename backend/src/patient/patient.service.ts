import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Patient } from './schema/patient.schema';
import { Model } from 'mongoose';

@Injectable()
export class PatientService {
    constructor(
        @InjectModel(Patient.name) private patientModel: Model<Patient>,
    ) { }

    async getPatients() {
        return 'Todos los pacientes';
    }
    async getPatientById() {
        return 'Paciente por Id'
    }
    async createPatient() {
        return 'Nuevo paciente'
    }
    async updatePatientById() {
        return 'Modificacion de paciente';
    }
    async deletePatientById() {
        return 'Eliminacion de paciente'
    }
}
