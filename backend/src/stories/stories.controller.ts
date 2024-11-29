import { Controller, Delete, Get, HttpCode, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { StoriesService } from './stories.service';

@ApiTags('Stories')
@Controller('stories')
export class StoriesController {
    constructor(private readonly storiesService: StoriesService) { }

    @HttpCode(201)
    @Get()
    @ApiOperation({ summary: 'Ver historial' })
    getStories() {
        return this.storiesService.getStories();
    }

    @HttpCode(201)
    @Get()
    @ApiOperation({ summary: 'Ver una historia' })
    getStory() {
        return this.storiesService.getStoryById();
    }

    @HttpCode(201)
    @Post()
    @ApiOperation({ summary: 'Crear una historia' })
    createStory() {
        return this.storiesService.createStory();
    }

    @HttpCode(201)
    @Put()
    @ApiOperation({ summary: 'Modificar una historia' })
    updateStory() {
        return this.storiesService.updateStoryById();
    }

    @HttpCode(201)
    @Delete()
    @ApiOperation({ summary: 'Eliminar una historia' })
    deletetStory() {
        return this.storiesService.deleteStoryById();
    }
}
