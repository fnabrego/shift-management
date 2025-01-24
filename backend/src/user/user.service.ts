import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schema/user.schema';
import { Patient } from './schema/patient.schema';
import { Professional } from './schema/professional.schema';
import { CreateUserDto } from './dto/user.dto';
import { UpdatePatientDto } from './dto/patient.dto';
import { UpdateProfessionalDto } from './dto/professional.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private userModel: Model<User>,
        @InjectModel(Patient.name) private patientModel: Model<Patient>,
        @InjectModel(Professional.name) private professionalModel: Model<Professional>,
    ) { }

    async getUsers(page?: number, limit?: number): Promise<User[]> {
        if (!page || !limit) {
            const users: User[] = await this.userModel.find(); //? ver como se comporta con las relaciones.
            return users;
        }
        const skip = (page - 1) * limit;
        const users = await this.userModel.find({ take: limit, skip: skip });
        return users;
    }

    async getUserById(id: string): Promise<User> {
        const user = (await this.userModel.findById(id));
        if (!user) throw new NotFoundException(`User id = ${id} not found`);
        return user;
    }

    async getUserByEmail(email: string): Promise<User> {
        const user = await this.userModel.findOne({ email });
        if (!user) throw new NotFoundException(`User email = ${email} not found`);
        return user;
    }

    async createUser(user: Partial<User>): Promise<User> {
        const findUser = await this.userModel.findOne({ where: user.dni });
        console.log('buscando paciente: -> ' + findUser)
        if (findUser) throw new ConflictException(`Existing User DNI: ${user.dni} `);
        //! Pendiente hashing de password
        const newUser = await this.userModel.create(user);
        if (!newUser) throw new NotFoundException(`User not found`);
        return newUser;
    }

    async updateUserById(id: string, data1?: UpdatePatientDto, data2?: UpdateProfessionalDto)/* : Promise<Patient|| Professional> */ {
        switch (data1 || data2) {
            case data1:
                const findPatient = await this.patientModel.findById(id);
                if (!findPatient) throw new NotFoundException(`Patient ${id} not found`);
                const updatePatient = await this.patientModel.findByIdAndUpdate(id, data1);
                if (!updatePatient) throw new InternalServerErrorException('Failed updating');
                return updatePatient;
            case data2:
                const findProfessional = await this.professionalModel.findById(id);
                if (!findProfessional) throw new NotFoundException(`Professional ${id} not found`);
                const updateProfesssional = await this.professionalModel.findByIdAndUpdate(id, data1);
                if (!updateProfesssional) throw new InternalServerErrorException('Failed updating');
                return updateProfesssional;
        }
    }

    async deleteUserById(id: string): Promise<Partial<User>> {
        const user = await this.userModel.findByIdAndUpdate(id, { isDeleted: true });
        if (!user) throw new NotFoundException(`User ${id} not found`);
        return user.id;
    }
}
