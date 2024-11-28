import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Schedule } from './schema/schedule.schema';

@Injectable()
export class ScheduleService {
    constructor(
        @InjectModel(Schedule.name) private scheduleModel: Model<Schedule>,
    ) { }

    async getSchedules() {
        return 'Todos las agendas';
    }
    async getScheduleById() {
        return 'Agenda por Id'
    }
    async createSchedule() {
        return 'Nuevo agenda'
    }
    async updateScheduleById() {
        return 'Modificacion de agenda';
    }
    async deleteScheduleById() {
        return 'Eliminacion de agenda'
    }
}
