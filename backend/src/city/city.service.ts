import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { City } from './schema/city.schema';
import { Model } from 'mongoose';

@Injectable()
export class CityService {
    constructor(
        @InjectModel(City.name) private cityModel: Model<City>,
    ) { }

    async getCities() {
        return 'Todos las ciudades';
    }
    async getCityById() {
        return 'Ciudad por Id'
    }
    async createCity() {
        return 'Nuevo ciudad'
    }
    async updateCityById() {
        return 'Modificacion de ciudad';
    }
    async deleteCityById() {
        return 'Eliminacion de ciudad'
    }
}
