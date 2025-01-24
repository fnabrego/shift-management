import { ApiProperty, PickType } from "@nestjs/swagger";
import { IsNotEmpty, IsString, Matches, IsArray } from "class-validator";
import { BaseUser } from "../shared/user";

export class CreateProfessionalDto extends BaseUser {

    @ApiProperty({
        description: 'Matrícula',
        example: '4589-25',
    })
    @IsNotEmpty()
    @IsString()
    registration: string;

    @ApiProperty({
        description: 'Validez',
        example: '05/10/2026',
    })
    @IsNotEmpty()
    @Matches(/^([0-2][0-9]|(3)[0-1])\/([0][1-9]|1[0-2])\/\d{4}$/, { message: 'La fecha debe tener el formato DD/MM/YYYY' })
    validity: string;

    @ApiProperty({
        description: 'Especialidad',
        example: '[Clínica]',
    })
    @IsNotEmpty()
    @IsArray()
    specialty: string[];

    @ApiProperty({
        description: 'Lugar de atención',
        example: 'Hospital General',
    })
    @IsNotEmpty()
    @IsString()
    placeOfCare: string;

}
export class UpdateProfessionalDto extends PickType(
    CreateProfessionalDto,
    ['first_name', 'second_name', 'last_name', 'birthdate', 'state', 'city', 'dni', 'email', 'password', 'profile_picture', 'registration', 'validity', 'specialty', 'placeOfCare']) { }
