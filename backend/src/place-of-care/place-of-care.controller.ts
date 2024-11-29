import { Controller, Delete, Get, HttpCode, Post, Put } from '@nestjs/common';
import { PlaceOfCareService } from './place-of-care.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Place of care')
@Controller('place-of-care')
export class PlaceOfCareController {
    constructor(private readonly placeOfCareService: PlaceOfCareService) { }
    
    @HttpCode(201)
    @Get()
    @ApiOperation({ summary: 'Ver lugares de atencion' })
    getPlacesOfCare() {
        return this.placeOfCareService.getPlaceOfCares();
    }

    @HttpCode(201)
    @Get()
    @ApiOperation({ summary: 'Ver un lugar de atencion' })
    getPlaceOfCare() {
        return this.placeOfCareService.getPlaceOfCareById();
    }

    @HttpCode(201)
    @Post()
    @ApiOperation({ summary: 'Crear un lugar de atencion' })
    createPlaceOfCare() {
        return this.placeOfCareService.createPlaceOfCare();
    }

    @HttpCode(201)
    @Put()
    @ApiOperation({ summary: 'Modificar un lugar de atencion' })
    updatePlaceOfCare() {
        return this.placeOfCareService.updatePlaceOfCareById();
    }

    @HttpCode(201)
    @Delete()
    @ApiOperation({ summary: 'Eliminar un lugar de atencion' })
    deletetPlaceOfCare() {
        return this.placeOfCareService.deletePlaceOfCareById();
    }
}
