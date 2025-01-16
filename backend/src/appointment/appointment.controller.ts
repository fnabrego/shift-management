import { Controller, Delete, Get, HttpCode, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AppointmentService } from './appointment.service';

@ApiTags('Appointments')
@Controller('appointments')
export class AppointmentController {
    constructor(private readonly appointmentService: AppointmentService) { }

    @HttpCode(201)
    @Get()
    @ApiOperation({ summary: 'Ver turnos' })
    getAppointments() {
        return this.appointmentService.getAppointments();
    }

    @HttpCode(201)
    @Get()
    @ApiOperation({ summary: 'Ver un turno' })
    getAppointment() {
        return this.appointmentService.getAppointmentById();
    }

    @HttpCode(201)
    @Post()
    @ApiOperation({ summary: 'Crear un turno' })
    createAppointment() {
        return this.appointmentService.createAppointment();
    }

    @HttpCode(201)
    @Put()
    @ApiOperation({ summary: 'Modificar un turno' })
    updateAppointment() {
        return this.appointmentService.updateAppointmentById();
    }

    @HttpCode(201)
    @Delete()
    @ApiOperation({ summary: 'Eliminar un turno' })
    deletetAppointment() {
        return this.appointmentService.deleteAppointmentById();
    }
}
