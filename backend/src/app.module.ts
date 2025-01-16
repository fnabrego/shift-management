import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfessionalModule } from './professional/professional.module';
import { AppointmentModule } from './appointment/appointment.module';
import { PatientModule } from './patient/patient.module';
import { StudiesModule } from './studies/studies.module';
import { StoriesModule } from './stories/stories.module';
import { TimeSlotModule } from './time-slot/time-slot.module';
import { StateModule } from './state/state.module';
import { CityModule } from './city/city.module';
import { SpecialtyModule } from './specialty/specialty.module';
import { PlaceOfCareModule } from './place-of-care/place-of-care.module';
import { HealthcareModule } from './healthcare/healthcare.module';
import { MailsModule } from './mails/mails.module';
import { ScheduleModule } from './schedule/schedule.module';
import { AuthModule } from './auth/auth.module';
import { config as dotenvConfig } from 'dotenv';
import { MorganMiddleware } from './middlewares/morgan.middleware';
import { UpdateDbModule } from './update-db/update-db.module';
import { JwtModule } from '@nestjs/jwt';

dotenvConfig({ path: '.env' });


@Module({
  imports: [MongooseModule.forRoot(process.env.ATLAS_URL),
    PatientModule, ProfessionalModule, AppointmentModule, StudiesModule, StoriesModule, TimeSlotModule, StateModule, CityModule, SpecialtyModule, PlaceOfCareModule, HealthcareModule, MailsModule, ScheduleModule, AuthModule, UpdateDbModule, JwtModule.register({ global: true, secret: '$2y$10$N0GE8Xe3JKI0g1Cv530sfePFoK3QpVm7hf7qoSPW4R1Gwnouvg.K2', signOptions: { expiresIn: '1h' } })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MorganMiddleware).forRoutes('*');
  }
}
