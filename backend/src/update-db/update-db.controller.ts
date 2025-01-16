import { Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { DatabaseUpdateService } from './update-db.service';
import * as path from 'path';
import * as cities from '../utils/states-cities.json'

@ApiTags('Update')
@Controller('update-database')
export class DatabaseUpdateController {
    constructor(private readonly databaseUpdateService: DatabaseUpdateService) { }

    @ApiOperation({ summary: 'Actualizar DB' })
    @Post()
    async updateDatabase(): Promise<string> {
        //const filePath = path.join(__dirname, '..', './utils/states-cities.json');
        await this.databaseUpdateService.updateDatabaseFromFile();
        return 'Database update initiated.';
    }

}
