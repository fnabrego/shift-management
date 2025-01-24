import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { UpdatePatientDto } from './dto/patient.dto';
import { UpdateProfessionalDto } from './dto/professional.dto';

@ApiTags('user')
@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @HttpCode(201)
    @Get('all')
    @ApiOperation({ summary: 'Ver usuarios' })
    @ApiParam({ name: 'page', required: false, type: String })
    @ApiParam({ name: 'limit', required: false, type: String })
    getUsers(@Param('page') page?: string, @Param('limit') limit?: string) {
        if (!page || !limit) return this.userService.getUsers();
        const pageInt = Number(page);
        const limitInt = Number(limit);
        return this.userService.getUsers(pageInt, limitInt);
    }

    @HttpCode(201)
    @Get(':id')
    @ApiOperation({ summary: 'Ver un usuario' })
    getUser(@Param('id') id: string) {
        return this.userService.getUserById(id);
    }

    /* @HttpCode(201)
    @Post()
    @ApiOperation({ summary: 'Crear un usuario' })
    createUser() {
        return this.userService.createUser();
    } */

    @HttpCode(201)
    @Put(':id')
    @ApiOperation({ summary: 'Modificar un usuario' })
    updateUser(
        @Param('id') id: string,
        @Body() data1?: UpdatePatientDto,
        @Body() data2?: UpdateProfessionalDto
    ) {
        return this.userService.updateUserById(id, data1, data2);
    }

    @HttpCode(201)
    @Delete(':id')
    @ApiOperation({ summary: 'Eliminar un usuario' })
    deletetUser(@Param('id') id: string) {
        return this.userService.deleteUserById(id);
    }
}
