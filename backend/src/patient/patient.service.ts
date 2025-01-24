import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePatientDto, UpdatePatientDto } from '../user/dto/patient.dto';
import { User } from '../user/schema/user.schema';
import { Patient } from '../user/schema/patient.schema';
import { Professional } from '../user/schema/professional.schema';

@Injectable()
export class PatientService {
    constructor(
        @InjectModel(User.name) private userModel: Model<User>,
        @InjectModel(Patient.name) private patientModel: Model<Patient>,
        /* @InjectModel(Professional.name) private professionalModel: Model<Professional> */
    ) { }

    async getPatients(page?: number, limit?: number): Promise<Patient[]> {
        if (!page || !limit) {
            const patients: Patient[] = await this.patientModel.find(); //? ver como se comporta con las relaciones.
            return patients;
        }
        const skip = (page - 1) * limit;
        const patients = await this.patientModel.find({ take: limit, skip: skip });
        return patients;
    }

    async getPatientById(id: string): Promise<Patient> {
        const patient = (await this.patientModel.findById(id)).populated('Appointments');
        if (!patient) throw new NotFoundException(`Patient ${id} not found`);
        return patient;
    }

    async getPatientByEmail(email: string): Promise<Patient> {
        const patient = await this.patientModel.findOne({ email });
        if (!patient) throw new NotFoundException(`Patient ${email} not found`);
        return patient;
    }

    async createPatient(patient: CreatePatientDto): Promise<Patient> {
        const findPatient = await this.patientModel.findOne({ where: patient.dni });
        console.log('buscando paciente: -> ' + findPatient)
        if (findPatient) throw new ConflictException(`Existing Patient DNI: ${patient.dni} `);
        //! Pendiente hashing de password
        const newPatient = await this.patientModel.create(patient);
        if (!newPatient) throw new NotFoundException(`Patient not found`);
        return newPatient;
    }

    async updatePatientById(id: string, data: UpdatePatientDto): Promise<Patient> {
        const findPatient = await this.patientModel.findById(id);
        if (!findPatient) throw new NotFoundException(`Patient ${id} not found`);

        const updatePatient = await this.patientModel.findByIdAndUpdate(id, data);
        if (!updatePatient) throw new InternalServerErrorException('Failed updating');
        return updatePatient;
    }

    async deletePatientById(id: string): Promise<Partial<Patient>> {
        const patient = await this.patientModel.findByIdAndUpdate(id, { isDeleted: true });
        if (!patient) throw new NotFoundException(`Patient ${id} not found`);
        return patient.id;
    }
}
