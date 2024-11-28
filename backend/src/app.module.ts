import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientModule } from './patient/patient.module';
import { ProfessionalService } from './professional/professional.service';
import { ProfessionalModule } from './professional/professional.module';
import { AppointmentModule } from './appointment/appointment.module';
import { StudiesModule } from './studies/studies.module';
import { StoriesModule } from './stories/stories.module';
import { TimeSlotService } from './time-slot/time-slot.service';
import { TimeSlotController } from './time-slot/time-slot.controller';
import { TimeSlotModule } from './time-slot/time-slot.module';
import { StateModule } from './state/state.module';
import { CityModule } from './city/city.module';
import { SpecialtyModule } from './specialty/specialty.module';
import { PlaceOfCareModule } from './place-of-care/place-of-care.module';
import { HealthcareModule } from './healthcare/healthcare.module';
import { MailsModule } from './mails/mails.module';
import { ScheduleModule } from './schedule/schedule.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { config as dotenvConfig } from 'dotenv';
dotenvConfig({ path: '.env' });


@Module({
  imports: [MongooseModule.forRoot(process.env.ATLAS_URL),
    PatientModule, ProfessionalModule, AppointmentModule, StudiesModule, StoriesModule, TimeSlotModule, StateModule, CityModule, SpecialtyModule, PlaceOfCareModule, HealthcareModule, MailsModule, ScheduleModule, AuthModule],
  controllers: [AppController, TimeSlotController],
  providers: [AppService, ProfessionalService, TimeSlotService],
})
export class AppModule {}
