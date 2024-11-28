import { IsEnum, IsNotEmpty, IsString, Matches } from "class-validator";
import { Status } from "../enum/status.enum";
import { ApiHideProperty, ApiProperty } from "@nestjs/swagger";

export class CreateAppointmentDto {

    // @ApiHideProperty()
    // _id: string;

    @ApiProperty({
        description: 'Localidad',
        example: 'Springfield',
      })
    @IsNotEmpty()
    @IsString()
    patient_id: string;

    @ApiProperty({
        description: 'Localidad',
        example: 'Springfield',
      })
    @IsNotEmpty()
    @IsString()
    professional_id: string;

    @ApiProperty({
        description: 'Localidad',
        example: 'Springfield',
      })
    @IsNotEmpty()
    @IsString()
    schedule_id: string;

    @ApiProperty({
        description: 'Localidad',
        example: 'Springfield',
      })
    //@IsDateString({}, { message: 'La fecha debe ser válida en formato ISO 8601' })
    // @Matches(/^([0-2][0-9]|(3)[0-1])\/([0][1-9]|1[0-2])\/\d{4}$/, { message: 'La fecha debe tener el formato DD/MM/YYYY' })
    date: Date;

    @ApiProperty({
        description: 'Localidad',
        example: 'Springfield',
      })
    @IsNotEmpty()
    @IsString()
    time_slot: string;

    @ApiProperty({
        description: 'Localidad',
        example: 'Springfield',
      })
    @IsEnum(Status)
    status: Status;
}
