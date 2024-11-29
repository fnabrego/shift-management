import { Controller, Delete, Get, HttpCode, Post, Put } from '@nestjs/common';
import { SpecialtyService } from './specialty.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Specialties')
@Controller('specialty')
export class SpecialtyController {
    constructor(private readonly specialtyService: SpecialtyService) { }

    @HttpCode(201)
    @Get()
    @ApiOperation({ summary: 'Ver especialidades' })
    getSpecialties() {
        return this.specialtyService.getSpecialties();
    }

    @HttpCode(201)
    @Get()
    @ApiOperation({ summary: 'Ver un especialidad' })
    getSpecialty() {
        return this.specialtyService.getSpecialtyById();
    }

    @HttpCode(201)
    @Post()
    @ApiOperation({ summary: 'Crear una especialidad' })
    createSpecialty() {
        return this.specialtyService.createSpecialty();
    }

    @HttpCode(201)
    @Put()
    @ApiOperation({ summary: 'Modificar una especialidad' })
    updateSpecialty() {
        return this.specialtyService.updateSpecialtyById();
    }

    @HttpCode(201)
    @Delete()
    @ApiOperation({ summary: 'Eliminar una especialidad' })
    deletetSpecialty() {
        return this.specialtyService.deleteSpecialtyById();
    }
}
