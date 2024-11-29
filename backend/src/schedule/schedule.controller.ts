import { Controller, Delete, Get, HttpCode, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ScheduleService } from './schedule.service';

@ApiTags('Schedule')
@Controller('schedule')
export class ScheduleController {
    constructor(private readonly scheduleService: ScheduleService) { }

    @HttpCode(201)
    @Get()
    @ApiOperation({ summary: 'Ver agenda' })
    getSchedules() {
        return this.scheduleService.getSchedules();
    }

    @HttpCode(201)
    @Get()
    @ApiOperation({ summary: 'Ver un agenda?' })
    getSchedule() {
        return this.scheduleService.getScheduleById();
    }

    @HttpCode(201)
    @Post()
    @ApiOperation({ summary: 'Crear un agenda' })
    createSchedule() {
        return this.scheduleService.createSchedule();
    }

    @HttpCode(201)
    @Put()
    @ApiOperation({ summary: 'Modificar un agenda' })
    updateSchedule() {
        return this.scheduleService.updateScheduleById();
    }

    @HttpCode(201)
    @Delete()
    @ApiOperation({ summary: 'Eliminar un agenda' })
    deletetSchedule() {
        return this.scheduleService.deleteScheduleById();
    }
}
