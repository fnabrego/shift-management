import { Controller, Delete, Get, HttpCode, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { StudiesService } from './studies.service';

@ApiTags('Studies')
@Controller('studies')
export class StudiesController {
    constructor(private readonly studyService: StudiesService) { }

    @HttpCode(201)
    @Get()
    @ApiOperation({ summary: 'Ver estudios' })
    getStudies() {
        return this.studyService.getStudies();
    }

    @HttpCode(201)
    @Get()
    @ApiOperation({ summary: 'Ver un estudio' })
    getStudy() {
        return this.studyService.getStudyById();
    }

    @HttpCode(201)
    @Post()
    @ApiOperation({ summary: 'Crear un estudio' })
    createStudy() {
        return this.studyService.createStudy();
    }

    @HttpCode(201)
    @Put()
    @ApiOperation({ summary: 'Modificar un estudio' })
    updateStudy() {
        return this.studyService.updateStudyById();
    }

    @HttpCode(201)
    @Delete()
    @ApiOperation({ summary: 'Eliminar un estudio' })
    deletetStudy() {
        return this.studyService.deleteStudyById();
    }
}
