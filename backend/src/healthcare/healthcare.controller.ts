import { Controller, Delete, Get, HttpCode, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { HealthcareService } from './healthcare.service';

@ApiTags('Healthcares')
@Controller('healthcare')
export class HealthcareController {
    constructor(private readonly healthcareService: HealthcareService){}
    
    @HttpCode(201)
    @Get()
    @ApiOperation({ summary: 'Ver obras sociales' })
    getHealthcares() {
        return this.healthcareService.getHealthcares();
    }

    @HttpCode(201)
    @Get()
    @ApiOperation({ summary: 'Ver una obra social' })
    getHealthcare() {
        return this.healthcareService.getHealthcareById();
    }

    @HttpCode(201)
    @Post()
    @ApiOperation({ summary: 'Crear una obra social' })
    createHealthcare() {
        return this.healthcareService.createHealthcare();
    }

    @HttpCode(201)
    @Put()
    @ApiOperation({ summary: 'Modificar un obra social' })
    updateHealthcare() {
        return this.healthcareService.updateHealthcareById();
    }

    @HttpCode(201)
    @Delete()
    @ApiOperation({ summary: 'Eliminar un obra social' })
    deletetHealthcare() {
        return this.healthcareService.deleteHealthcareById();
    }}
