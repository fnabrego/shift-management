import { IsEnum, IsNotEmpty, IsString, Matches } from "class-validator";
import { DayOfWeek } from "../../time-slot/enum/day_of_week.enum";
import { ApiHideProperty, ApiProperty } from "@nestjs/swagger";


export class CreateScheduleDto {

    @ApiHideProperty()
    _id: string;

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
    @IsEnum(DayOfWeek)
    day_of_week: DayOfWeek;

    @ApiProperty({
        description: 'Localidad',
        example: 'Springfield',
    })
    @IsNotEmpty()
    @IsString()
    @Matches(/^\d{2}:\d{2}$/, { message: 'start_time must be in HH:mm format' })
    start_time: string;

    @ApiProperty({
        description: 'Localidad',
        example: 'Springfield',
    })
    @Matches(/^\d{2}:\d{2}$/, { message: 'start_time must be in HH:mm format' })
    end_time: string;

}
