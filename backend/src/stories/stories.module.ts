import { Module } from '@nestjs/common';
import { StoriesController } from './stories.controller';
import { StoriesService } from './stories.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StoriesSchema, Story } from './schema/stories.schema';

@Module({
  imports:[MongooseModule.forFeature([{name: Story.name, schema:StoriesSchema}])],
  controllers: [StoriesController],
  providers: [StoriesService]
})
export class StoriesModule {}
