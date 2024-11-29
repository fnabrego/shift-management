import { Controller, Delete, Get, HttpCode, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { PatientService } from './patient.service';

@ApiTags('Patients')
@Controller('patient')
export class PatientController {
    constructor(private readonly patientService: PatientService) { }
    
    @HttpCode(201)
    @Get()
    @ApiOperation({ summary: 'Ver pacientes' })
    getPatients() {
        return this.patientService.getPatients();
    }

    @HttpCode(201)
    @Get()
    @ApiOperation({ summary: 'Ver un paciente' })
    getPatient() {
        return this.patientService.getPatientById();
    }

    @HttpCode(201)
    @Post()
    @ApiOperation({ summary: 'Crear un paciente' })
    createPatient() {
        return this.patientService.createPatient();
    }

    @HttpCode(201)
    @Put()
    @ApiOperation({ summary: 'Modificar un paciente' })
    updatePatient() {
        return this.patientService.updatePatientById();
    }

    @HttpCode(201)
    @Delete()
    @ApiOperation({ summary: 'Eliminar un paciente' })
    deletetPatient() {
        return this.patientService.deletePatientById();
    }
}
