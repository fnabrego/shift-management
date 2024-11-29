import { Controller, Delete, Get, HttpCode, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { TimeSlotService } from './time-slot.service';

@ApiTags('Time Slot')
@Controller('time-slot')
export class TimeSlotController {
    constructor(private readonly timeSlotService: TimeSlotService) { }

    @HttpCode(201)
    @Get()
    @ApiOperation({ summary: 'Ver horarios' })
    getTimeSlots() {
        return this.timeSlotService.getTimeSlots();
    }

    @HttpCode(201)
    @Get()
    @ApiOperation({ summary: 'Ver un horario' })
    getTimeSlot() {
        return this.timeSlotService.getSTimeSlotById();
    }

    @HttpCode(201)
    @Post()
    @ApiOperation({ summary: 'Crear una horario' })
    createTimeSlot() {
        return this.timeSlotService.createTimeSlot();
    }

    @HttpCode(201)
    @Put()
    @ApiOperation({ summary: 'Modificar una horario' })
    updateTimeSlot() {
        return this.timeSlotService.updateTimeSlotById();
    }

    @HttpCode(201)
    @Delete()
    @ApiOperation({ summary: 'Eliminar una horario' })
    deletetTimeSlot() {
        return this.timeSlotService.deleteTimeSlotById();
    }
}
