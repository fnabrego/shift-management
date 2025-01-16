import { Controller, Delete, Get, HttpCode, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ProfessionalService } from './professional.service';

@ApiTags('Professionals')
@Controller('professional')
export class ProfessionalController {
    constructor(private readonly professionalService: ProfessionalService) { }

    @HttpCode(201)
    @Get()
    @ApiOperation({ summary: 'Ver profesionales' })
    getProfessionals() {
        return this.professionalService.getProfessionals();
    }

    @HttpCode(201)
    @Get()
    @ApiOperation({ summary: 'Ver un profesional' })
    getProfessional() {
        return this.professionalService.getProfessionalById();
    }

    @HttpCode(201)
    @Post()
    @ApiOperation({ summary: 'Crear un profesional' })
    createProfessional() {
        return this.professionalService.createProfessional();
    }

    @HttpCode(201)
    @Put()
    @ApiOperation({ summary: 'Modificar un profesional' })
    updateProfessional() {
        return this.professionalService.updateProfessionalById();
    }

    @HttpCode(201)
    @Delete()
    @ApiOperation({ summary: 'Eliminar un profesional' })
    deletetProfessional() {
        return this.professionalService.deleteProfessionalById();
    }
}
