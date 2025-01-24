import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { PatientService } from './patient.service';
import { CreatePatientDto, UpdatePatientDto } from '../user/dto/patient.dto';

@ApiTags('Patients')
@Controller('patients')
export class PatientController {
    constructor(private readonly patientService: PatientService) { }

    @HttpCode(200)
    @Get('all')
    @ApiOperation({ summary: 'Ver pacientes' })
    @ApiParam({ name: 'page', required: false, type: String })
    @ApiParam({ name: 'limit', required: false, type: String })
    getPatients(@Param('page') page?: string, @Param('limit') limit?: string) {
        if (!page || !limit) return this.patientService.getPatients();
        const pageInt = Number(page);
        const limitInt = Number(limit);
        return this.patientService.getPatients(pageInt, limitInt);
    }

    @HttpCode(200)
    @Get(':id')
    @ApiOperation({ summary: 'Ver un paciente' })
    getPatientById(@Param('id') id: string) {
        return this.patientService.getPatientById(id);
    }

    /* @HttpCode(201)
    @Post('add')
    @ApiOperation({ summary: 'Crear un paciente' })
    createPatient(@Body() patient: CreatePatientDto) {
        return this.patientService.createPatient(patient);
    } */

    @HttpCode(200)
    @Put(':id')
    @ApiOperation({ summary: 'Modificar un paciente' })
    updatePatient(
        @Param('id') id: string,
        @Body() patient: UpdatePatientDto
    ) {
        return this.patientService.updatePatientById(id, patient);
    }

    @HttpCode(200)
    @Delete(':id')
    @ApiOperation({ summary: 'Eliminar un paciente' })
    deletetPatient(@Param('id') id: string) {
        return this.patientService.deletePatientById(id);
    }
}
