import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { State } from './schema/state.schema';

@Injectable()
export class StateService {
    constructor(
        @InjectModel(State.name) private stateModel: Model<State>,
    ) { }

    async getStates() {
        const states = await this.stateModel.find();
        if (!states) throw new NotFoundException('No estan cargados los estados')
        return states;
    }
    async getStateById() {
        return 'Estado por Id'
    }
    async createState() {
        return 'Nuevo estado'
    }
    async updateStateById() {
        return 'Modificacion de estado';
    }
    async deleteStateById() {
        return 'Eliminacion de estado'
    }
}
