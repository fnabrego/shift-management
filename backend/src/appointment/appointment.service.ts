import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Appointment } from './schema/appointment.schema';
import { Model } from 'mongoose';
import { CreateAppointmentDto } from './dto/appointment.dto';
import { Status } from './enum/status.enum';

@Injectable()
export class AppointmentService {
    constructor(
        @InjectModel(Appointment.name) private appointmentModel: Model<Appointment>,
    ) { }

    async getAppointments() {
        return 'Todos los turnos';
    }
    async getAppointmentById() {
        return 'Turno por Id'
    }
    async createAppointment() {
        return 'Nuevo turno'
        /* const fecha = '28/11/2024';
        const [day, month, year] = fecha.split('/');
        const date = new Date(`${year}-${month}-${day}`)
        const newAppointment: CreateAppointmentDto = {
            patient_id: '6748983d36ff5b82c274c1d1',
            professional_id: '6748983d36ff5n82c2s4c1d1',
            schedule_id: '6748983d36ff5b82c144c1l1',
            date: date,
            time_slot: '6748983d36ff5b82c244c1f1',
            status: Status.Available
        }

        const ok = await this.appointmentModel.create(newAppointment);

        if (!ok) throw new InternalServerErrorException('No se pudo crear turno');
        return (`Nuevo turno: ->-> ${ok}`);*/

    }
    async updateAppointmentById() {
        return 'Modificacion de turno';
    }
    async deleteAppointmentById() {
        return 'Eliminacion de turno'
    }

}
