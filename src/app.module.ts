import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PreTestingModule } from './pre-testing/pre-testing.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SignUpModule } from './sign-up/sign-up.module';
import "reflect-metadata";

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    PreTestingModule,
    SignUpModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
