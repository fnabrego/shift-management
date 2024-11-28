import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PlaceOfCare } from './schema/place-of-care.schema';
import { Model } from 'mongoose';

@Injectable()
export class PlaceOfCareService {constructor(
    @InjectModel(PlaceOfCare.name) private placeOfCareModel: Model<PlaceOfCare>,
) { }

async getPlaceOfCares() {
    return 'Todos las lugares de atencion';
}
async getPlaceOfCareById() {
    return 'Lugar de atencion por Id'
}
async createPlaceOfCare() {
    return 'Nuevo lugar de atencion'
}
async updatePlaceOfCareById() {
    return 'Modificacion de lugar de atencion';
}
async deletePlaceOfCareById() {
    return 'Eliminacion de lugar de atencion'
}}
