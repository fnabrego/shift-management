/* import { IsEmail, IsMongoId, IsNotEmpty, IsOptional, IsString, Matches, MaxLength, MinLength } from "class-validator";
import { ApiHideProperty, ApiProperty, PickType } from "@nestjs/swagger";
import { State } from "../../state/schema/state.schema";
import { City } from "../../city/schema/city.schema";


export class CreatePatientDto { */

  /* @ApiHideProperty()
  _id: string; */

/*   @ApiProperty({
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
  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  @IsMongoId()
  state: State;

  @ApiProperty({
    description: 'Localidad',
    example: 'Springfield',
  })
  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  @IsMongoId()
  city: City;

  @ApiProperty({
    description: 'Localidad',
    example: 'Springfield',
  })
  @IsOptional()
  @IsString()
  @MaxLength(50)
  @IsMongoId()
  healthcare: string;

  @ApiProperty({
    description: 'Localidad',
    example: 'Springfield',
  })
  @IsOptional()
  @IsString()
  @MaxLength(20)
  num_joined: string;

  @ApiProperty({
    description: 'Localidad',
    example: 'Springfield',
  })
  @IsOptional()
  @IsString()
  @MaxLength(20)
  plan: string;

  @ApiHideProperty()
  @IsString()
  @IsOptional()
  profile_picture: string;

  isDeleted: boolean;

}

export class LoginPatientDto extends PickType(
  CreatePatientDto,
  ['email', 'password']) { }

export class UpdatePatientDto extends PickType(
  CreatePatientDto,
  ['first_name', 'second_name', 'last_name', 'birthdate', 'state', 'city', 'dni', 'healthcare', 'email', 'password', 'num_joined', 'plan', 'profile_picture']) { }
 */