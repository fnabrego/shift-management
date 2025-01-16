import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TimeSlot } from './schema/time-slot.schema';

@Injectable()
export class TimeSlotService {
    constructor(
        @InjectModel(TimeSlot.name) private timeSlotModel: Model<TimeSlot>,
    ) { }

    async getTimeSlots() {
        return 'Todos los horarios';
    }
    async getSTimeSlotById() {
        return 'Horario por Id'
    }
    async createTimeSlot() {
        return 'Nuevo horario'
    }
    async updateTimeSlotById() {
        return 'Modificacion de horario';
    }
    async deleteTimeSlotById() {
        return 'Eliminacion de horario'
    }
}
