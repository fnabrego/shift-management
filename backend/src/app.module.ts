import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
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
import { UserModule } from './user/user.module';
import { UpdateDbModule } from './update-db/update-db.module';
import { config as dotenvConfig } from 'dotenv';
import { MorganMiddleware } from './middlewares/morgan.middleware';

dotenvConfig({ path: '.env' });


@Module({
  imports: [MongooseModule.forRoot(process.env.ATLAS_URL),
    PatientModule,
    ProfessionalModule,
    AppointmentModule,
    StudiesModule,
    StoriesModule,
    TimeSlotModule,
    StateModule,
    CityModule,
    SpecialtyModule,
    PlaceOfCareModule,
    HealthcareModule,
    MailsModule,
    ScheduleModule,
    AuthModule,
    UpdateDbModule,
    JwtModule.register({ global: true, secret: process.env.JWT_SECRET, signOptions: { expiresIn: '1h' } }), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MorganMiddleware).forRoutes('*');
  }
}
