import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";
import { UserRole } from "../../roles/roles.enum";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private jwtService: JwtService) { }
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        const token = request.headers.authorization?.split(' ')[1];

        if (!token) throw new UnauthorizedException('Token not found');

        try {
            const secret = process.env.JWT_SECRET;
            const user = this.jwtService.verify(token, { secret });

            if (!user) throw new UnauthorizedException('Validation token error');

            const roleMapping = {
                [UserRole.Admin]: [UserRole.Admin],
                [UserRole.Professional]: [UserRole.Professional],
                [UserRole.Patient]: [UserRole.Patient],
            };
            const assignedRole = roleMapping[user.role];
            if (!assignedRole) throw new UnauthorizedException('Role not recognized');

            user.exp = new Date(user.exp * 1000);
            user.roles = assignedRole;
            request.user = user;

            return true;

        } catch (error) {
            throw new UnauthorizedException('Token validation failed');
        }
    }
}