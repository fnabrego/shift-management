import { IsEnum } from "class-validator";
import { UserRole } from "./roles.enum";

export class RoleDto {
    @IsEnum(UserRole)
    role: UserRole;
}