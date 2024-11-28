import { Module } from '@nestjs/common';
import { StudiesController } from './studies.controller';
import { StudiesService } from './studies.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StudiesSchema, Study } from './schema/studies.schema';

@Module({
  imports:[MongooseModule.forFeature([{name: Study.name, schema:StudiesSchema}])],
  controllers: [StudiesController],
  providers: [StudiesService]
})
export class StudiesModule {}
