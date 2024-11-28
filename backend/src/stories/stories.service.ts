import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Story } from './schema/stories.schema';

@Injectable()
export class StoriesService {
    constructor(
        @InjectModel(Story.name) private storyModel: Model<Story>,
    ) { }

    async getStories() {
        return 'Todos las historias';
    }
    async getStoryById() {
        return 'Historia por Id'
    }
    async createStory() {
        return 'Nuevo historia'
    }
    async updateStoryById() {
        return 'Modificacion de historia';
    }
    async deleteStoryById() {
        return 'Eliminacion de historia'
    }
}
