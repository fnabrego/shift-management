import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { State } from '../state/schema/state.schema';
import { City } from '../city/schema/city.schema';
import * as fs from 'fs';
import * as file from '../utils/states-cities.json'

// Define el tipo para las provincias y ciudades
interface ProvinceData {
  [province: string]: string[]; // Clave: Nombre de la provincia, Valor: Lista de ciudades
}

@Injectable()
export class DatabaseUpdateService {
  constructor(
    @InjectModel(State.name) private stateModel: Model<State>,
    @InjectModel(City.name) private cityModel: Model<City>,
  ) {}

  async updateDatabaseFromFile(): Promise<void> {
    // Leer archivo JSON y definir su tipo
//    const data: ProvinceData = JSON.parse(fs.readFileSync(file, 'utf-8'));

    for (const [stateName, cities] of Object.entries(file)) {
      let state = await this.stateModel.findOne({ name: stateName });
      if (!state) {
        state = new this.stateModel({ name: stateName });
        await state.save();
      }

      for (const cityName of cities) {
        const cityExists = await this.cityModel.findOne({
          name: cityName,
          state: state._id,
        });

        if (!cityExists) {
          const city = new this.cityModel({
            name: cityName,
            state: state._id,
          });
          await city.save();
        }
      }
    }

    console.log('Database updated successfully!');
  }
}
