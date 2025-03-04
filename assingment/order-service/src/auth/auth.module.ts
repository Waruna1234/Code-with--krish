import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtStratergy } from './jwt.stratergy';

@Module({
    imports:[PassportModule.register({defaultStrategy:'jwt'})],
    providers:[JwtStratergy],
    
})
export class AuthModule {}
