import { Module } from '@nestjs/common';
import { ProfessionalController } from './professional.controller';

@Module({
  controllers: [ProfessionalController]
})
export class ProfessionalModule {}
