import { Controller, Delete, Get, HttpCode, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { StateService } from './state.service';

@ApiTags('States')
@Controller('state')
export class StateController {
    constructor(private readonly stateService: StateService) { }

    @HttpCode(201)
    @Get()
    @ApiOperation({ summary: 'Ver estados' })
    getStates() {
        return this.stateService.getStates();
    }

    @HttpCode(201)
    @Get()
    @ApiOperation({ summary: 'Ver un estado' })
    getState() {
        return this.stateService.getStateById();
    }

    @HttpCode(201)
    @Post()
    @ApiOperation({ summary: 'Crear un estado' })
    createState() {
        return this.stateService.createState();
    }

    @HttpCode(201)
    @Put()
    @ApiOperation({ summary: 'Modificar un estado' })
    updateState() {
        return this.stateService.updateStateById();
    }

    @HttpCode(201)
    @Delete()
    @ApiOperation({ summary: 'Eliminar un estado' })
    deletetState() {
        return this.stateService.deleteStateById();
    }
}
