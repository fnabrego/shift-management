import { ApiProperty, PickType } from "@nestjs/swagger";
import { IsOptional, IsString, MaxLength, IsMongoId } from "class-validator";
import { BaseUser } from "../shared/user";

export class CreatePatientDto extends BaseUser {

    @ApiProperty({
        description: 'Obra Social',
        example: 'OSDE',
    })
    @IsOptional()
    @IsString()
    @MaxLength(50)
    @IsMongoId()
    healthcare: string;

    @ApiProperty({
        description: 'N° Afiliado',
        example: '564985627/02',
    })
    @IsOptional()
    @IsString()
    @MaxLength(20)
    num_joined: string;

    @ApiProperty({
        description: 'Plan',
        example: '210',
    })
    @IsOptional()
    @IsString()
    @MaxLength(20)
    plan: string;

}
export class UpdatePatientDto extends PickType(
    CreatePatientDto,
    ['first_name', 'second_name', 'last_name', 'birthdate', 'state', 'city', 'dni', 'healthcare', 'email', 'password', 'num_joined', 'plan', 'profile_picture']) { }
