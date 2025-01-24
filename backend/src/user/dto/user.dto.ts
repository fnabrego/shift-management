import { IsEmail, IsEnum, IsMongoId, IsNotEmpty, IsOptional, IsString, Matches, MaxLength, MinLength, Validate } from "class-validator";
import { ApiHideProperty, ApiProperty, PickType } from "@nestjs/swagger";
import { State } from "../../state/schema/state.schema";
import { City } from "../../city/schema/city.schema";
import { UserRole } from "../../roles/roles.enum";
import { MatchPassword } from "../../decorators/matchPass.decorator";


export class CreateUserDto {

  @ApiProperty({
    description: 'Nombre',
    example: 'Roberto',
  })
  @IsNotEmpty()
  @IsString()
  first_name: string;

  @ApiProperty({
    description: 'Segundo nombre',
    example: 'Alejandro',
  })
  @IsOptional()
  @IsString()
  second_name: string;

  @ApiProperty({
    description: 'Apellido',
    example: 'Romero',
  })
  @IsNotEmpty()
  @IsString()
  last_name: string;

  @ApiProperty({
    description: 'Documento / Identificación',
    example: '11546835',
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(8)
  @MinLength(7)
  dni: number;

  @ApiProperty({
    description: 'Nacimiento',
    example: '10/04/1975',
  })
  @IsNotEmpty()
  @Matches(/^([0-2][0-9]|(3)[0-1])\/([0][1-9]|1[0-2])\/\d{4}$/, { message: 'La fecha debe tener el formato DD/MM/YYYY' })
  birthdate: string;

  @ApiProperty({
    description: 'Email',
    example: 'ra-romero@mail.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Contraseña',
    example: '1234@abcd',
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

  @ApiProperty({
    description: 'Confirmación',
    example: '1234@abcd',
  })
  @IsNotEmpty()
  @Validate(MatchPassword, ['password'])
  confirmPassword: string;

  @ApiProperty({
    description: 'Provincia',
    example: 'Mendoza',
  })
  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  @IsMongoId()
  state: State;

  @ApiProperty({
    description: 'Localidad',
    example: 'Godoy Cruz',
  })
  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  @IsMongoId()
  city: City;

  @ApiProperty({
    description: 'Role',
    example: 'Patient',
  })
  @IsOptional()
  @IsEnum(UserRole)
  role: UserRole;

  @ApiHideProperty()
  @IsString()
  @IsOptional()
  profile_picture: string;

  /* isDeleted: boolean; */

}

export class LoginUserDto extends PickType(
  CreateUserDto,
  ['email', 'password']) { }

export class GoogleLoginUserDto extends PickType(CreateUserDto, ['email']) { }