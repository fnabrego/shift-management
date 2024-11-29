import { Controller, Delete, Get, HttpCode, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CityService } from './city.service';

@ApiTags('Cities')
@Controller('cities')
export class CityController {
    constructor(private readonly cityService: CityService) { }

    @HttpCode(201)
    @Get()
    @ApiOperation({ summary: 'Ver ciudades' })
    getCities() {
        return this.cityService.getCities();
    }

    @HttpCode(201)
    @Get()
    @ApiOperation({ summary: 'Ver una ciudad' })
    getCityt() {
        return this.cityService.getCityById();
    }

    @HttpCode(201)
    @Post()
    @ApiOperation({ summary: 'Crear una ciudad' })
    createCity() {
        return this.cityService.createCity();
    }

    @HttpCode(201)
    @Put()
    @ApiOperation({ summary: 'Modificar una ciudad' })
    updateCity() {
        return this.cityService.updateCityById();
    }

    @HttpCode(201)
    @Delete()
    @ApiOperation({ summary: 'Eliminar una ciudad' })
    deletetCity() {
        return this.cityService.deleteCityById();
    }
}
