import { Injectable } from '@nestjs/common';
import { config as dotenvConfig } from 'dotenv';
import * as mongoose from 'mongoose';
dotenvConfig({ path: '.env' });


@Injectable()
export class MongooseConfigService {
    public async onModuleInit() {
        const mongoUrl = process.env.ATLAS_URL;
        if (!mongoUrl) {
            throw new Error('ATLAS_URL not defined in env');
        }
        try {
            await mongoose.connect(mongoUrl)
            console.log('Conexión a MongoDB exitosa')
        } catch (error) {
            console.log('Error al concetar a MongoDB', error)
        }
    }
}