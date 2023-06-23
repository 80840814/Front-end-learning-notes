import { Global, Module } from '@nestjs/common'
import { ConfigService } from './config.service'
import { ConfigModule as BaseMoudle } from '@nestjs/config'
import { AppController } from './app.controller'
import config from '../config'
@Global()
@Module({
  imports: [
    BaseMoudle.forRoot({
      load: [config],
    }),
  ],
  controllers: [AppController],
  providers: [ConfigService],
})
export class ConfigModule {}
