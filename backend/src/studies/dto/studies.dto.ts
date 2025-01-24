import { IsArray, IsEmail, IsNotEmpty, IsOptional, IsString, Matches, MaxLength, MinLength } from "class-validator";
import { ApiHideProperty, ApiProperty } from "@nestjs/swagger";


export class CreateStudiesDto {

  @ApiHideProperty()
  _id: string;

  @ApiProperty({
    description: 'Fecha de Estudio',
    example: '05/06/2025',
  })
  @IsNotEmpty()
  @Matches(/^([0-2][0-9]|(3)[0-1])\/([0][1-9]|1[0-2])\/\d{4}$/, { message: 'La fecha debe tener el formato DD/MM/YYYY' })
  date: string;

  @ApiProperty({
    description: 'Información',
    example: 'Redacción de informe médico del análisis/estudio/exámen realizado',
  })
  @IsNotEmpty()
  @IsString()
  information: string;

  @ApiProperty({
    description: 'ID del paciente',
    example: 'verificar si ID o DNI o nombre',
  })
  @IsNotEmpty()
  @IsString()
  patient_id: string;

  @ApiProperty({
    description: 'ID del professional que ejecutó el análisis/estudio/exámen',
    example: 'verificar si ID o DNI o nombre',
  })
  @IsNotEmpty()
  @IsString()
  professional_id: string;

  @ApiProperty({
    description: 'Centro médico',
    example: 'Laboratorio General',
  })
  @IsNotEmpty()
  @IsString()
  placeOfCare_id: string;

  @ApiProperty({
    description: 'Links de acceso a las imagenes',
    example: 'https://centromedico.com.ar',
  })
  @IsOptional()
  @IsArray()
  url: string[];

  @ApiHideProperty()
  isDeleted: boolean;

}
