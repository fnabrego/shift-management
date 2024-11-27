import { IsNotEmpty, IsString, Matches } from "class-validator";
import { ApiHideProperty, ApiProperty } from "@nestjs/swagger";


export class CreateStoriesDto {

  @ApiHideProperty()
  _id: string;

  @ApiProperty({
    description: 'Localidad',
    example: 'Springfield',
  })
  @IsNotEmpty()
  @Matches(/^([0-2][0-9]|(3)[0-1])\/([0][1-9]|1[0-2])\/\d{4}$/, { message: 'La fecha debe tener el formato DD/MM/YYYY' })
  date: Date;

  @ApiProperty({
    description: 'Localidad',
    example: 'Springfield',
  })
  @IsNotEmpty()
  @IsString()
  information: string;

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
  placeOfCare_id: string;

  @ApiHideProperty()
  isDeleted: boolean;

}
