import { IsArray, IsEmail, IsNotEmpty, IsOptional, IsString, Matches, MaxLength, MinLength } from "class-validator";
import { ApiHideProperty, ApiProperty } from "@nestjs/swagger";


export class CreateProfessionalDto {

 /*  @ApiHideProperty()
  _id: string; */

  @ApiProperty({
    description: 'Localidad',
    example: 'Springfield',
  })
  @IsNotEmpty()
  @IsString()
  first_name: string;

  @ApiProperty({
    description: 'Localidad',
    example: 'Springfield',
  })
  @IsOptional()
  @IsString()
  second_name: string;

  @ApiProperty({
    description: 'Localidad',
    example: 'Springfield',
  })
  @IsNotEmpty()
  @IsString()
  last_name: string;

  @ApiProperty({
    description: 'Localidad',
    example: 'Springfield',
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(8)
  @MinLength(7)
  dni: number;

  @ApiProperty({
    description: 'Localidad',
    example: 'Springfield',
  })
  @IsNotEmpty()
  @Matches(/^([0-2][0-9]|(3)[0-1])\/([0][1-9]|1[0-2])\/\d{4}$/, { message: 'La fecha debe tener el formato DD/MM/YYYY' })
  birthdate: Date;

  @ApiProperty({
    description: 'Localidad',
    example: 'Springfield',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Localidad',
    example: 'Springfield',
  })
  @IsNotEmpty()
  @IsString()
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, {
    message:
      'La contraseña debe tener una letra mayuscula, una letra minuscula, un numero y un caracter especial: !@#$%^&* ',
  })
  @MinLength(8)
  @MaxLength(15)
  password: string;

  @IsNotEmpty()
  //@Validate(MatchPassword, ['password'])
  confirmPassword: string;

  @ApiProperty({
    description: 'Localidad',
    example: 'Springfield',
  })
  @IsNotEmpty()
  @IsString()
  registration: string;

  @ApiProperty({
    description: 'Localidad',
    example: 'Springfield',
  })
  @IsNotEmpty()
  @Matches(/^([0-2][0-9]|(3)[0-1])\/([0][1-9]|1[0-2])\/\d{4}$/, { message: 'La fecha debe tener el formato DD/MM/YYYY' })
  validity: Date;

  @ApiProperty({
    description: 'Localidad',
    example: 'Springfield',
  })
  @IsNotEmpty()
  @IsArray()
  specialty: string[];

  @ApiProperty({
    description: 'Localidad',
    example: 'Springfield',
  })
  @IsNotEmpty()
  @IsString()
  placeOfCare: string;

  @ApiProperty({
    description: 'Localidad',
    example: 'Springfield',
  })
  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  state: string;

  @ApiProperty({
    description: 'Localidad',
    example: 'Springfield',
  })
  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  city: string;

  @ApiProperty({
    description: 'Localidad',
    example: 'Springfield',
  })
  @IsOptional()
  @IsArray()
  healthcare: string[];

  @ApiProperty({
    description: 'Localidad',
    example: 'Springfield',
  })
  @IsOptional()
  @IsArray()
  appointments: string[];

  @ApiProperty({
    description: 'Localidad',
    example: 'Springfield',
  })
  @IsOptional()
  @IsArray()
  stories: string[];

  @ApiHideProperty()
  @IsString()
  @IsOptional()
  profile_picture: string;

  @ApiHideProperty()
  isDeleted: boolean;

}
