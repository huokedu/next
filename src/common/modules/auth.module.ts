import * as passport from 'passport';
import {
    Module,
    NestModule,
    MiddlewaresConsumer,
    RequestMethod,
} from '@nestjs/common';
import { AuthService } from "../services/auth.service";
import { JwtStrategy } from "../strategies/jwt.strategy";
import { AuthController } from "../controllers/auth.controller";

@Module({
    components: [
        AuthService,
        JwtStrategy,
    ],
    controllers: [
        AuthController,
    ],
})
export class AuthModule implements NestModule {
    public configure(consumer: MiddlewaresConsumer) {
        consumer
            .apply(passport.authenticate('jwt', { session: false }))
            .forRoutes({ path: '/auth/authorized', method: RequestMethod.ALL });
    }
}